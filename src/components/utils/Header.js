import React, { useEffect, useState } from 'react'
import '../../scss/utils/Header.scss';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/Aquarel Logo-01.png'
function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  function handleScroll() {
    const isTop = window.scrollY < 92; // change 100 to whatever value you want
    setIsHeaderFixed(!isTop);
    setIsOpen(false)
  }
  function handleSectionScroll() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
    console.log(currentSection)
  }
  useEffect(() => {
    handleSectionScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);


  return (
    <div className={`header ${isHeaderFixed ? "fixed" : ""}`}>
      <div className="container">
        {isHeaderFixed ? <div className="logo"><img src={logo} alt="" /></div> : ""}
        <nav className='main-nav'>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="menu-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: isOpen ? "black" : "white" }} />
          <ul className={`nav-links ${isOpen ? 'active' : ""}`}>
            <li className={activeSection === 'home' ? 'active' : ''}><Link to="#" onClick={_ => setIsOpen(false)}>Home</Link></li>
            <li className={activeSection === 'about' ? 'active' : ''}><Link to="/#about" onClick={_ => setIsOpen(false)} >About</Link></li>
            <li className={activeSection === 'services' ? 'active' : ''}><Link to="/#services" onClick={_ => setIsOpen(false)}>Services</Link></li>
            <li className={activeSection === 'rooms' ? 'active' : ''}><Link to="/#rooms" onClick={_ => setIsOpen(false)}>Rooms</Link></li>
            <li className={activeSection === 'gallery' ? 'active' : ''}><Link to="/#gallery" onClick={_ => setIsOpen(false)}>Gallery</Link></li>
            <li className={activeSection === 'contact' ? 'active' : ''}><Link to="/#contact" onClick={_ => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Header