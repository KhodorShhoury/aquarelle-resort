import React from 'react'
import MainHeading from '../utils/MainHeading'
import drone4 from '../../assets/drone.jpeg'
import roomsImage from '../../assets/rooms.JPG'
import viewImage from '../../assets//view.JPG'
import blueRoom from "../../assets/DroneGreen.jpg"
import yellowDoor from "../../assets/yellow-door.JPG"
import '../../scss/components/Home/Gallery.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
function Gallery() {
      return (
            <div id='gallery' className='gallery'>
                  <MainHeading title="gallery" />
                  <div className="container">
                        <div className="images">
                              <Swiper
                                    slidesPerView={1}
                                    breakpoints={{
                                          640: {
                                                slidesPerView: 2,
                                          },
                                          768: {
                                                slidesPerView: 2,
                                          },
                                          992: {
                                                slidesPerView: 3,
                                          },
                                    }}
                                    spaceBetween={30}
                                    pagination={{
                                          clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                              >
                                    <SwiperSlide><img src={drone4} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={roomsImage} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={yellowDoor} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={blueRoom} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={viewImage} alt="" /></SwiperSlide>
                              </Swiper>
                        </div>
                  </div>
            </div>
      )
}

export default Gallery