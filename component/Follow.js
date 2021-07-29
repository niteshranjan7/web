import React, { Component } from 'react';
import insta from '../assets/images/insta.png';
import facebook from '../assets/images/facebook.png';
import px from '../assets/images/500px.png';
import pinterest from '../assets/images/pinterest.png'
import ScrollableAnchor from 'react-scrollable-anchor'

class  Follow extends Component {
    render() {
        return (
            <ScrollableAnchor id={'App-follow'}>
            
            <div className="App-follow">
            <div
                className="follow-header">Follow Me On Social Media
            </div>
            <div className="follow-content">
            <div className= "insta-logo" >
            <img src= {insta} alt="instalogo" />
            </div>
            <div className= "facebook-logo" >
            <img src= {facebook} alt="facebooklogo" />
            </div>
            <div className= "px-logo" >
            <img src= {px} alt="500pxlogo" />
            </div>
            <div className= "pinterest-logo" >
            <img src= {pinterest} alt="pinterest logo" />
            </div>
            </div>
            </div>
            
            </ScrollableAnchor>
        );
    }
}

export default Follow;