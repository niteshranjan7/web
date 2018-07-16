import React, { Component } from 'react';
import logo from '/Users/nitesh/my-app/src/assets/images/final copy.png';
import Test from '/Users/nitesh/my-app/src/assets/images/test.jpg'
import Profile from '/Users/nitesh/my-app/src/assets/images/My profile.jpg'

class Gallery extends Component {
    render() {
        return (
            <div className="App-gallery">
           
            <div className="gallery-header">
                <h2>Galleries</h2>
                <div className="gallery-header-brlow"><h2>Complete image portfolio </h2></div>
            </div>    
            <div className="gallery-body">
            <div >
                <img src= {Test} alt="Profile-pic" /> </div>
                <div >
                <img src= {Profile} alt="Profile-pic" /> </div><div >
                <img src= {Test} alt="Profile-pic" /> </div><div >
                <img src= {Test} alt="Profile-pic" /> </div><div >
                <img src= {Test} alt="Profile-pic" /> </div> 
            </div>
            </div>
        );
    }
}

export default Gallery;