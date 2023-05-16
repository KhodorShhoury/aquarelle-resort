import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { EffectCreative, Navigation, Pagination } from 'swiper/core';

SwiperCore.use([EffectCreative, Navigation, Pagination]);

function Room({ name, features, price, images }) {
    return (
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
                    navigation={false}
                    pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCreative, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}><img src={image} alt="" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="content">
                <h3 className='name'>{name}</h3>
                <ul>
                    <li>Free breakfast for {features.breakfast} people <FontAwesomeIcon icon={faCheck} /></li>
                    <li>free gym access <FontAwesomeIcon icon={features.gym ? faCheck : faMinus} /></li>
                    <li>free wifi <FontAwesomeIcon icon={features.wifi ? faCheck : faMinus} /></li>
                    <li>room service <FontAwesomeIcon icon={features.service ? faCheck : faMinus} /></li>
                    <li>pool <FontAwesomeIcon icon={features.pool ? faCheck : faMinus} /></li>
                    <li>jacuzzi <FontAwesomeIcon icon={features.jaccuzi ? faCheck : faMinus} /></li>
                </ul>
                <span className='price'>${price}</span>
            </div>
        </div>
    );
}

export default Room;
