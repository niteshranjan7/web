import React from "react";
import '/Users/nitesh/my-app/src/App.css';
import logo from '/Users/nitesh/my-app/src/assets/images/final copy.png';
//let elem1 = document.getElementsById("App-header");


export default class Header extends React.Component {
    
    render(){
        return (
            <div className="App-header">
               
                <a href="#slider-container">Home</a>
                <a href="#App-aboutme">About</a>
                <a href="#App-gallery">Galleries</a>
                <div className= "App-logo" >
                <img src= {logo} alt="logo" />
                </div>
                <a href="#App-travelwithme">Travel</a>
                <a href="#App-contact">Contact</a>
                <a href="#App-follow">Follow</a>
                
            </div>
            
        );
    }
    
}