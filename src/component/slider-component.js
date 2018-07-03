import React from 'react';
import Slider from  "react-animated-slider" ;

const sliderComponent = (props) => {
    return (
        <div className="slider-container">
            <Slider autoplay = {props.slideDuration} >
                <img src = "/Users/nitesh/my-app/src/assets/images/final.png" alt ="1"/>
                <img src = "https://s18.postimg.cc/vunvhvvrt/img2.jpg" alt="2"/>
                <img src = "https://s18.postimg.cc/tdc4amjl5/img3.jpg" alt="3"/>
            </ Slider>    
        </div>
    );
};

export default sliderComponent;