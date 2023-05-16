import React from 'react'
import MainHeading from '../utils/MainHeading'
import '../../scss/components/Home/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
function Contact() {
    return (
        <section id='contact' className='contact'>
            <MainHeading title="connect with us" />
            <div className="container">
                <div className="find-us">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.3347615495188!2d35.43147448077271!3d33.30646422450007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151e91b4c5c62307%3A0xa80bab4faf48208f!2sAquarelle!5e1!3m2!1sen!2slb!4v1681988425033!5m2!1sen!2slb" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="follow-us">
                    <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100090816897441" target='_blank'> <div className='icon'><FontAwesomeIcon icon={faFacebook} /></div><span>Aquarelle Resort</span></a></li>
                        <li><a href="https://www.instagram.com/aquarelle_resort/" target='_blank'> <div className='icon'><FontAwesomeIcon icon={faInstagram} /></div><span>Aquarelle Resort</span></a></li>
                        <li><a href="#"> <div className='icon'><FontAwesomeIcon icon={faTiktok} /></div><span>Aquarelleresort</span></a></li>
                        <li><a href="tel:+96171101618" > <div className='icon'><FontAwesomeIcon icon={faPhone} /></div><span>+961 71 101 618</span></a></li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Contact