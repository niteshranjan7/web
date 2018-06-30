import React from "react";
import '/Users/nitesh/my-app/src/App.css';
import Profile from '/Users/nitesh/my-app/src/assets/images/My profile.jpg'
//import logo from '/Users/nitesh/my-app/src/logo.svg';


export default class Body extends React.Component {
    render(){
        return (
            <body className="Body-head">
            <div className= "image-box" >
            <img src= {Profile} alt="Profile-pic" />
            </div>
            <div className="content">Travel with me</div>
            </body>
        );
    }
}