import React from 'react';
import './destinations.css';
import Beach from '../../assets/beach1.jpg';
import Beach2 from '../../assets/beach2.jpg';
import Beach3 from '../../assets/beach3.jpg';
import Beach4 from '../../assets/beach4.jpg';
import Beach5 from '../../assets/beach5.jpg';

function Destinations() {
  return (
    <div className='destinations'>
      <div className='container'>
        <h1>All-inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className='image-container'>
            <img className='span-3 image-grid-row-2' src={Beach} alt="Beach" />
            <img src={Beach2} alt="Beach" />
            <img src={Beach3} alt="Beach" />
            <img src={Beach4} alt="Beach" />
            <img src={Beach5} alt="Beach" />
        </div>
      </div>
    </div>
  )
}

export default Destinations;
