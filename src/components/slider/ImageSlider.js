import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ImageSlider.css';

function ImageSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }

    return (
        
            <Slider {...settings} className= "slick__list__main">
                <div className = "carousel__body">
                    <img className = "slider__image" src = "/images/slider-1.jpg" alt= "" />
                </div>
                <div className = "carousel__body">
                    <img className = "slider__image" src = "/images/slide-22.jpg" alt= "" />
                </div>
                <div className = "carousel__body">
                    <img className = "slider__image" src = "/images/slider_main.jpg" alt= "" />
                </div>
                {/* <div className = "carousel__body">
                    <img className = "slider__image" src = "/images/slider-3.jpg" alt= "" />
                </div> */}
                
                
            </Slider>
           
       
    )
}

export default ImageSlider