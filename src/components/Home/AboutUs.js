import React, { useRef, useState } from 'react';
import aboutImage from '../../assets/DroneGreen.jpg';
import '../../scss/components/Home/AboutUs.scss';
import MainHeading from '../utils/MainHeading';
import videoRef from '../../assets/intro.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
function AboutUs() {
  const [isPlay,setIsPlay] = useState(false);
  const [isShown,setIsShown] = useState(true);
  const video = useRef();
  console.log(video)
  const playButton = useRef();
  const handleVideoPlayer = ()=>{
    setIsPlay(!isPlay);
    isPlay ? video.current.pause() : video.current.play();
  }
  const handlePlayButton = (e)=>{
    if(!video.current.paused)
    if (e.type == "mouseenter"){
      setIsShown(true)
    }else{
      setIsShown(false)
    }
  }
  return (
    <div id='about' className='about-us'>
      <div className="container">
        <div className="content">
          <MainHeading title="about us" />
          <h2 className='title'>A best place to enjoy your life</h2>
          <p className='desc'>Located in the heart of South Lebanon, AQUARELLE hugs the valley and offers stunning natural views, fresh air, and the tranquil sounds of chirping birds. It's the perfect place to unwind and enjoy your own mindful relaxation, calmness, and meditation.</p>
        </div>
        <div className="video-intro" onMouseEnter={(e) => handlePlayButton(e)} onMouseLeave={handlePlayButton} onClick={handleVideoPlayer}>
          <video ref={video} src={videoRef}  poster= {aboutImage}></video>
          <div className= {`play-button ${isShown ? 'active' : ''}`} onClick={handleVideoPlayer} ref={playButton} ><FontAwesomeIcon icon={isPlay ? faPause : faPlay}/></div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs