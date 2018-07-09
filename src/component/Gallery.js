import React, { Component } from 'react';
import logo from '/Users/nitesh/my-app/src/assets/images/final copy.png';
import Profile from '/Users/nitesh/my-app/src/assets/images/My profile.jpg'


class Gallery extends Component {
    render() {
        return (
            <div className="App-gallery">
           
            <div className="widget-header">
                <h2> Galleries </h2>
            </div>    
            <div className="widget-body">
                <img src= {Profile} alt="Profile-pic" />
                <img src= {Profile} alt="Profile-pic" />
                <img src= {Profile} alt="Profile-pic" />
                <img src= {Profile} alt="Profile-pic" />
            </div>
            </div>
        );
    }
}

export default Gallery;