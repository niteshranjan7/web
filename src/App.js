import React from "react";
import Header from "./component/Header"; 
import Footer from "./component/Footer";
import Slider from  "react-animated-slider" ;
import  "./horizontal.css" ;

export default class Layout extends React.Component {
      constructor(props){
        super(props);
        this.name = "Nitesh";
    } 
    render(){
        return (
            <div>
            <Header />
            <Slider autoplay = {3000} >
	              <img src = "/Users/nitesh/my-app/src/assets/images/final.png" alt ="1"/>
	              <img src = "https://s18.postimg.cc/vunvhvvrt/img2.jpg" alt="2"/>
	              <img src = "https://s18.postimg.cc/tdc4amjl5/img3.jpg" alt="3"/>
            </ Slider>
            <h1> It's {this.name}! </h1>
            <Footer />
            </div>
        );
    }
}


/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/