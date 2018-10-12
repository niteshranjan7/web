import React, { Component } from 'react';
import '/Users/nitesh/my-app/src/App.css';
import Travel from '/Users/nitesh/my-app/src/assets/images/travel.jpg'
import ScrollableAnchor from 'react-scrollable-anchor'
class TravelWithMe extends Component {
    render() {
        return (
            <ScrollableAnchor id={'App-travelwithme'}>
            
            <div className="App-travelwithme">
               <div className="travelwithme-header">
                    <h1>Travel With Me</h1>
               </div>
               <div className="travelwithme-body">
               <div className= "travelwithme-box" >
                    <img src= {Travel} alt="Profile-pic" />
                    </div>
                <div className="content">  
                An opportunity to learn about photography and life on the road from being out in the field with me.
                    Who this opportunity might be for
                    Those who want to travel in a way that is different to tourists.
                    Aspiring photographers who want to learn by being out in the field and seeing how travel photos are taken.
                    The main things I am looking for are, knowledge of the local language or languages, as well as excellent communication and people skills. Familiarity with traditional communities and their cultures is a big bonus.

                    Below is a list of the countries that I am planning on visiting soon.
                    _______-_______
                    </div>
                </div>

            </div>
        
            </ScrollableAnchor>
        );
    }
}

export default TravelWithMe;