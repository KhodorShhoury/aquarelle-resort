import React from 'react'
import MainHeading from '../utils/MainHeading'
import roomImage from '../../assets/1L9A9260.JPG';
import bluePoolRoom from '../../assets/bluePool.JPG';
import blueJacoozyRoom from '../../assets/blue-jacozy.JPG';
import pinkRoom from '../../assets/pink-room.JPG'
import '../../scss/components/Home/Rooms.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Navigation, Pagination } from "swiper";
function Rooms() {
    return (
        <div id='rooms' className='rooms'>
            <MainHeading title="Rooms" />
            <div className="container">
                <div className="boxes">
                    <div className="box">
                        <div className="image">
                            <Swiper
                                grabCursor={true}
                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                navigation={true}
                                pagination = {true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[EffectCreative, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={pinkRoom} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={pinkRoom} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={pinkRoom} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="content">
                            <h3 className='name'>Classic</h3>
                            <ul>
                                <li>Free breakfast for 2 people <FontAwesomeIcon icon={faCheck} /></li>
                                <li>free gym access <FontAwesomeIcon icon={faCheck} /></li>
                                <li>free wifi <FontAwesomeIcon icon={faCheck} /></li>
                                <li>room service <FontAwesomeIcon icon={faCheck} /></li>
                                <li>pool <FontAwesomeIcon icon={faMinus} /></li>
                                <li>jacuzzi <FontAwesomeIcon icon={faMinus} /></li>
                            </ul>
                            <span className='price'>$150</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <Swiper
                                grabCursor={true}
                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                navigation={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={true}
                                modules={[EffectCreative, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={bluePoolRoom} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={roomImage} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={roomImage} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="content">
                            <h3 className='name'>Classic</h3>
                            <ul>
                                <li>Free breakfast for 4 people <FontAwesomeIcon icon={faCheck} /></li>
                                <li>free gym access <FontAwesomeIcon icon={faCheck} /></li>
                                <li>free wifi <FontAwesomeIcon icon={faCheck} /></li>
                                <li>room service <FontAwesomeIcon icon={faCheck} /></li>
                                <li>pool <FontAwesomeIcon icon={faCheck} /></li>
                                <li>jacuzzi <FontAwesomeIcon icon={faMinus} /></li>
                            </ul>
                            <span className='price'>$200</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <Swiper
                                grabCursor={true}
                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                navigation={true}
                                pagination={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[EffectCreative, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={blueJacoozyRoom} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={roomImage} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={roomImage} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="content">
                            <h3 className='name'>Classic</h3>
                            <ul>
                                <li>Free breakfast for 6 people <FontAwesomeIcon icon={faCheck} /></li>
                                <li>free gym access <FontAwesomeIcon icon={faCheck} /></li>
                                <li>free wifi <FontAwesomeIcon icon={faCheck} /></li>
                                <li>room service <FontAwesomeIcon icon={faCheck} /></li>
                                <li>pool <FontAwesomeIcon icon={faCheck} /></li>
                                <li>jacuzzi <FontAwesomeIcon icon={faCheck} /></li>
                            </ul>
                            <span className='price'>$300</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms