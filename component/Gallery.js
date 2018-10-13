import React, { Component } from 'react';
import icon from '/Users/nitesh/my-app/src/assets/images/gallery.png';
import Test from '/Users/nitesh/my-app/src/assets/images/candid.jpg'
import Travelp from '/Users/nitesh/my-app/src/assets/images/travelphoto.jpg';
import Landscape from '/Users/nitesh/my-app/src/assets/images/landscape.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'

class Gallery extends Component {

    galleryData = [
        {
            title: "Candid",
            imageUrl: Test
        },
        {
            title: "Travel",
            imageUrl: Travelp
        },
        {
            title: "Landscape",
            imageUrl: Landscape
        }
    ];

    render() {
        return (
            <ScrollableAnchor id={"App-gallery"}>
            
            <div className="App-gallery">
           
            <div className="gallery-header">
                <div className="gallery-header1"><h1>Galleries</h1></div>
            </div>
            <div className="gallery-body">
            {
                this.galleryData && this.galleryData.map((galleryObj) => {
                    return (
                        <div className="gallery-1">
                            <img src= {galleryObj.imageUrl} alt="gallery1" />
                            <div className="gallery-title">
                                <img className="gallery-icon-1" src= {icon} alt="icon1"/>
                                <span className="gallery-tile-info-1">{galleryObj.title}</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>

            {/* <div className="gallery-body">
                <div className="gallery-1">
                     <img src= {Test} alt="gallery1" />
                     <div className="gallery-title">
                     <img className="gallery-icon-1" src= {icon} alt="icon1"/>
                     <span className="gallery-tile-info-1">Candid</span>   
                     
                     </div>
                     </div>
                <div className="gallery-1">
                      <img src= {Travelp} alt="gallery2" />
                      <div className="gallery-title">
                      <img className="gallery-icon-1" src= {icon} alt="icon2"/>
                      <span className="gallery-tile-info-1">Travel</span>
                      </div>
                      </div>
                <div className="gallery-1">
                      <img src= {Landscape} alt="gallery3" /> 
                      <div className="gallery-title">
                      <img className="gallery-icon-1" src= {icon} alt="icon3"/>
                     <span className="gallery-tile-info-1">Landscape</span>
                     </div>
                     </div>
            </div> */}
            </div>
            
            </ScrollableAnchor>
            
        );
    }
}

export default Gallery;
