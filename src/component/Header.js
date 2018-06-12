import React from "react";
import '/Users/nitesh/my-app/src/App.css';
import logo from '/Users/nitesh/my-app/src/assets/images/final.png'
//import logo from '/Users/nitesh/my-app/src/logo.svg';


export default class Header extends React.Component {
    render(){
        return (
            <header className="App-header">
            <img src= {logo} className= "App-logo" alt="logo" />
            </header>
        );
    }
}