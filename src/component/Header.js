import React from "react";
import '/Users/nitesh/my-app/src/App.css';
import logo from '/Users/nitesh/my-app/src/assets/images/final.png'
//import logo from '/Users/nitesh/my-app/src/logo.svg';


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
            <ul className="nav" role="navigation">
            <li><i className="fa fa-home"></i>Home</li>
            <li><i className="fa fa-bell-o"></i>About</li>
            <img src= {logo} className= "App-logo" alt="logo" />
            <li><i className="fa fa-envelope-o"></i>Travel with me</li>
            <li><i className="fa fa-twitter"></i>Contact</li>
            </ul>
            </header>
        );
    }
}