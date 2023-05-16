import React from 'react'
import MainHeading from '../utils/MainHeading'
import classicRoomImage from '../../assets/rooms/classic/IMG_4458.JPG'
import classicRoomImage1 from '../../assets/rooms/classic/IMG_4451.jpg'
import classicRoomImage2 from '../../assets/rooms/classic/IMG_4452.JPG'
import classicRoomImage4 from '../../assets/rooms/classic/IMG_4469.JPG'
import classicRoomImage3 from '../../assets/rooms/classic/IMG_4467.JPG'

import vipRoomImage4 from '../../assets/rooms/vip/IMG_4481.JPG'
import vipRoomImag2 from '../../assets/rooms/vip/IMG_4482.JPG'
import vipRoomImage3 from '../../assets/rooms/vip/IMG_4486.JPG'
import vipRoomImage1 from '../../assets/rooms/vip/IMG_4487.JPG'

import vipPLusRoomImage1 from '../../assets/rooms/vip+/IMG_9918.jpg'
import vipPLusRoomImage2 from '../../assets/rooms/vip+/IMG_9921.jpg'
import vipPLusRoomImage3 from '../../assets/rooms/vip+/IMG_9923.jpg'
import vipPLusRoomImage4 from '../../assets/rooms/vip+/IMG_9924.jpg'
import vipPLusRoomImage5 from '../../assets/rooms/vip+/IMG_9919.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import Room from './Room';
import '../../scss/components/Home/Rooms.scss';
function Rooms() {
    return (
        <section id='rooms' className='rooms'>
            <MainHeading title="Rooms" />
            <div className="container">
                <div className="boxes">
                    <Room title="Classic"
                        images={[classicRoomImage, classicRoomImage4, classicRoomImage3, classicRoomImage2, classicRoomImage1 ]}
                    features={{
                        breakfast : 2,
                        gym : true,
                        wifi: true,
                        service : true,
                        pool : false,
                        jaccuzi : false,
                    }}
                    price={150} />
                    <Room title="Classic"
                        images={[vipRoomImage1, vipRoomImage4, vipRoomImag2, vipRoomImage3]}
                    features={{
                        breakfast : 4,
                        gym : true,
                        wifi: true,
                        service : true,
                        pool : true,
                        jaccuzi : false,
                    }}
                    price={200} />
                    <Room title="Classic"
                        images={[vipPLusRoomImage1, vipPLusRoomImage2, vipPLusRoomImage3, vipPLusRoomImage4, vipPLusRoomImage5]}
                    features={{
                        breakfast : 6,
                        gym : true,
                        wifi: true,
                        service : true,
                        pool : true,
                        jaccuzi : true,
                    }}
                    price={300} />
                </div>
            </div>
        </section>
    )
}

export default Rooms