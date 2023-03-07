import React from 'react';
import './main.css';
import video from '../../assets/video4.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Main() {
  return (
    <div className='main'>
      <video src={video} autoPlay loop muted id='video' type="video/mp4"></video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className='form'>
            <div>
                <input type="text" placeholder='Search destinations' />
            </div>
            <div>
                <button><AiOutlineSearch className='icon' /></button>
            </div>
        </form>
      </div>
    </div>
  )
}
