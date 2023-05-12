import React from 'react'
import '../../scss/components/Home/Services.scss';
import MainHeading from '../utils/MainHeading';
import gymImage from '../../assets/Gym.JPG';
import restoImage from '../../assets/Resto.JPG';
import eventsImage from '../../assets/events.JPG';
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
function Services() {
    return (
        <div id='services' className="services">
            <MainHeading title="Services" />
            <div className="container">
                <div className="boxes">
                    <div className="box">
                        <div className="image">
                            <img src={gymImage} alt="" />
                        </div>
                        <div className="content">
                            <h3>Events</h3>
                            <div className="icon">
                                <FontAwesomeIcon icon={faDiamond} />
                            </div>
                            <p>Make your special day unforgettable with our resort's events services! We offer a stunning and serene location for weddings and events of all kinds.  Our experienced team is dedicated to making your event truly spectacular.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={restoImage} alt="" />
                        </div>
                        <div className="content">
                            <h3>Resto</h3>
                            <div className="icon">
                                <FontAwesomeIcon icon={faDiamond} />
                            </div>
                            <p>Our restaurant is open for breakfast, lunch, and dinner, and we offer a wide range of cuisine styles to choose from. From local favorites to international dishes, we have something for everyone</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={eventsImage} alt="" />
                        </div>
                        <div className="content">
                            <h3>Gym</h3>
                            <div className="icon">
                                <FontAwesomeIcon icon={faDiamond} />
                            </div>
                            <p>we know how important it is to stay healthy and fit, even when you're on vacation. That's why we offer a fully equipped gym on-site for our guests to use. Our gym is open 24 hours a day, so you can work out whenever it's convenient for you.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services