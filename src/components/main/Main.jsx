import React from 'react';
import './main.css';
import video from '../../assets/video4.mp4';

export default function Main() {
  return (
    <div className='main'>
      <video src={video} autoPlay loop muted id='video' type="video/mp4"></video>
      <div className="overlay"></div>
    </div>
  )
}
