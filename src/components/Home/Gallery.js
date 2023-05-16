import React from 'react'
import MainHeading from '../utils/MainHeading'
import Gallery1 from '../../assets/gallery1.jpg'
import Gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets//view.JPG'
import gallery4 from "../../assets/gallery3.JPG"
import gallery5 from "../../assets/yellow-door.JPG"
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
            <section id='gallery' className='section gallery'>
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
                                    <SwiperSlide><img src={Gallery1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={Gallery2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={gallery3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={gallery4} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={gallery5} alt="" /></SwiperSlide>
                              </Swiper>
                        </div>
                  </div>
            </section>
      )
}

export default Gallery