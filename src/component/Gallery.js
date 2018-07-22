import React, { Component } from 'react';
import icon from '/Users/nitesh/my-app/src/assets/images/gallery.png';
import Test from '/Users/nitesh/my-app/src/assets/images/candid.jpg'
import Travelp from '/Users/nitesh/my-app/src/assets/images/travelphoto.jpg'
import Landscape from '/Users/nitesh/my-app/src/assets/images/landscape.jpg'

class Gallery extends Component {
    render() {
        return (
            <div className="App-gallery">
           
            <div className="gallery-header">
                <div className="gallery-header1"><h1>Galleries</h1></div>
                <h1>Complete image portfolio </h1>
            </div>    
            <div className="gallery-body">
                <div className="gallery-1">
                     <img src= {Test} alt="gallery1" />
                     <img className="gallery-icon-1" src= {icon} alt="icon1"/>
                     <span className="gallery-tile-info-1">Candid</span>   
                     </div>
                <div className="gallery-2">
                      <img src= {Travelp} alt="gallery2" />
                      <img className="gallery-icon-2" src= {icon} alt="icon2"/>
                      <span className="gallery-tile-info-2">Travel</span>
                      </div>
                <div className="gallery-3">
                      <img src= {Landscape} alt="gallery3" /> 
                      <img className="gallery-icon-3" src= {icon} alt="icon3"/>
                     <span className="gallery-tile-info-3">Landscape</span>
                     </div>
            </div>
            </div>
        );
    }
}

export default Gallery;