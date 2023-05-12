import React, { useRef, useState } from 'react'
import '../../scss/utils/Header.scss';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='header'>
      <div className="container">
        <nav className='main-nav'>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="menu-toggle" onClick={() => setIsOpen(!isOpen)} />
          <ul className= {`nav-links ${isOpen ? 'active' : ""}`}>
            <li><Link to="#" onClick={_ => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/#about" onClick={_ => setIsOpen(false)} >About</Link></li>
            <li><Link to="/#services" onClick={_ => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/#rooms" onClick={_ => setIsOpen(false)}>Rooms</Link></li>
            <li><Link to="/#gallery" onClick={_ => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/#contact" onClick={_ => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header