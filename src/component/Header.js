import React from "react";
import '/Users/nitesh/my-app/src/App.css';
import logo from '/Users/nitesh/my-app/src/assets/images/final copy.png';


export default class Header extends React.Component {
    render(){
        return (
            <div className="App-header">
                <div className="home">Home</div>
                <div className="about">About</div>
                <div className="galleries">Galleries</div>
                <div className= "App-logo" >
                <img src= {logo} alt="logo" />
                </div>
                <div className="travel">Travel</div>
                <div className="contact">Contact</div>
                <div className="follow">Follow</div>
            </div>
        );
    }
}
