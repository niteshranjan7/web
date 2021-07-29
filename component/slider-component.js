import React from 'react';
import Slider from  "react-animated-slider" ;
import ScrollableAnchor from 'react-scrollable-anchor'
const sliderComponent = (props) => {
    return (
        <ScrollableAnchor id={"slider-container"}>
        <div className="slider-container">
        
            <Slider autoplay = {props.slideDuration} >
                <img src = "../assets/images/test.jpg" alt ="1"/>
                <img src = "https://s18.postimg.cc/vunvhvvrt/img2.jpg" alt="2"/>
                <img src = "https://s18.postimg.cc/tdc4amjl5/img3.jpg" alt="3"/>
            </ Slider>    
        </div>
        </ScrollableAnchor>
    );
};

export default sliderComponent;