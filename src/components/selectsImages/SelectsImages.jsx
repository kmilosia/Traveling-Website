import React from 'react';
import './selectsImages.css';

function SelectsImages(props) {
  return (
    <div className='selects-location'>
      <img src={props.imageSrc} alt={props.text} />
      <div className="overlay">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default SelectsImages;
