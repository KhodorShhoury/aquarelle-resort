import React from 'react';
import drone1 from '../../assets/Drone1.JPG';
import '../../scss/components/Home/HeroSection.scss';
import logoDesktop from '../../assets/HeroSectionLogo.png';
import logoMobile from '../../assets/Group 154.png';

function HeroSection() {
  return (
    <div id='#' className='landing' style={{ height: window.innerHeight }}>
        <div className="overlay"></div>
      <div className="assets">
        <img src={drone1} alt="" />
      </div>
      <div className="logo">
      <img className='logoDesktop' src= {logoDesktop} alt="" />
      <img className='logoMobile' src= {logoMobile} alt="" />
      </div>
        <div className="container">
        <div className="content">
          <div className="text">
            <h1>Lets Enjoy <span>Our Vacation</span> </h1>
            <p>Enjoy relaxation in stunning views of nature at our resort. Whether you're seeking peace and quiet, Our resort offers the perfect balance of relaxation and excitement amidst breathtaking natural scenery.</p>
          </div>
          {/* <div className="play-video">
            <div>
              <FontAwesomeIcon icon={faPlay}/>
            </div>
          </div> */}
        </div>
        </div>
       
    </div>
  )
}

export default HeroSection