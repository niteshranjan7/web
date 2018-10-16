import React from "react";
import '/Users/nitesh/my-app/src/App.css';
import Profile from '/Users/nitesh/my-app/src/assets/images/My profile.jpg'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class AboutMe extends React.Component {
    render(){
        return (
            <ScrollableAnchor id={'App-aboutme'}>
            
            <div className="App-aboutme">
                <div className="aboutme-header">
                    <h1>About Me</h1>
                </div>
                <div className="aboutme-body">
                  <div className= "image-box" >
                      <img src= {Profile} alt="Profile-pic" />
                  </div>
                  <div className="content">This section is here for you to learn a little more about me and my work. 
                   I am Candid, Landscape and Travel Photographer, grew up in the INDIA loving nature and travel.
                   A love of travelling has been a constant in my life and a love of photography grew naturally out of that 
                   My Desire is to capture the places I saw and the impression they made on me. 
                   Now I focus on traveling, shooting landscapes and candid, I'm still inspired by visiting new places and new cultures, from the landscapes to the buzz of the cities.
                
                   * MY GEAR 
                   I shoot with Nikon dSLRs cameras and I’m proud to be ………………. I currently use a Nikon D5200 along with various nikkor lenses.
                   I principally use Traveller carbon fibre tripod. Post-processing is done using Adobe Lightroom and  Photoshop CC .
                   </div>
                </div>
            </div>
            
            </ScrollableAnchor>
        );
    }
}