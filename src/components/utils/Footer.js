import React from 'react'
import '../../scss/utils/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h2 className='title'>Aquarelle <span>Resort</span></h2>
        <p className='desc'>Enjoy relaxation in stunning views of nature at our resort. Whether you're seeking peace and quiet, our resort we offers the perfect balance of relaxation and excitement amidst breathtaking natural scenery.</p>
        <div className="social">
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100090816897441"><FontAwesomeIcon icon={faFacebook} /></a>

          </div>
          <div className="icon">
            <a href="https://www.instagram.com/aquarelle_resort/"><FontAwesomeIcon icon={faInstagram} /></a>

          </div>
          <div className="icon">
            <a href="https://www.tiktok.com/@aquarelleresort?_t=8cN4vlVosd8&_r=1"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer