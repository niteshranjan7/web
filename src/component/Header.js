import React from "react";
import '/Users/nitesh/my-app/src/App.css';
import logo from '/Users/nitesh/my-app/src/assets/images/final copy.png';


export default class Header extends React.Component {
    render(){
        return (
            /*<header className="App-header">
            <nav className="Home">Home</nav>
            <nav className="About">About</nav>
            <img src= {logo} className= "App-logo" alt="logo" />
            <nav className="Travelwithme">Travel with me</nav>
            <nav className="Contact">Contact</nav>
            </header>*/
            <header className="App-header">
            <div className="home">Home</div>
            <div className="about">About</div>
            <div className= "App-logo" >
            <img src= {logo} alt="logo" />
            </div>
            <div className="travel">Travel with me</div>
            <div className="contact">Contact</div>
            </header>
        );
    }
}