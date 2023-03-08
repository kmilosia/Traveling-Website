import React from 'react';
import './imageCarousel.css';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import beach6 from '../../assets/beach6.jpg';
import beach7 from '../../assets/beach7.jpg';
import beach8 from '../../assets/beach8.jpg';

function ImageCarousel() {
  return (
    <div name="carousel" className="container">
    <Carousel className='carousel' showArrows={true} autoPlay infiniteLoop>
                <div>
                    <img src={beach6} />
                </div>
                <div>
                    <img src={beach7} />
                </div>
                <div>
                    <img src={beach8} />
                </div>
            </Carousel>
            </div>
  )
}

export default ImageCarousel;
