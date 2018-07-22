import React, { Component } from 'react';
import insta from '/Users/nitesh/my-app/src/assets/images/insta.svg';
import facebook from '/Users/nitesh/my-app/src/assets/images/facebook.svg';
import px from '/Users/nitesh/my-app/src/assets/images/500px.svg';
class  Follow extends Component {
    render() {
        return (
            <div>
            <div
                className="App-follow">Follow Me On Social Media
            </div>
            <div className= "insta-logo" >
            <img src= {insta} alt="instalogo" />
            </div>
            <div className= "facebook-logo" >
            <img src= {facebook} alt="facebooklogo" />
            </div>
            <div className= "px-logo" >
            <img src= {px} alt="500pxlogo" />
            </div>
            </div>
        );
    }
}

export default Follow;