import React, { Component } from 'react';
import logo from '/Users/nitesh/my-app/src/assets/images/final copy.png';
import Test from '/Users/nitesh/my-app/src/assets/images/candid.jpg'
import Profile from '/Users/nitesh/my-app/src/assets/images/My profile.jpg'

class Gallery extends Component {
    render() {
        return (
            <div className="App-gallery">
           
            <div className="gallery-header">
                <h2>Galleries</h2>
                <h2>Complete image portfolio </h2>
            </div>    
            <div className="gallery-body">
                <div className="gallery-1">
                     <img src= {Profile} alt="Profile-pic" />
                     <span className="tile-info">Candid</span>   
                 </div>
                <div className="gallery-2">
                <img src= {Test} alt="Profile-pic" /> </div>
            </div>
            </div>
        );
    }
}

export default Gallery;