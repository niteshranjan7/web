import React from "react";
import Header from "./component/Header"; 
import Footer from "./component/Footer";
import AboutMe from "./component/AboutMe";
import Gallery from "./component/Gallery";
import TravelWithMe from "./component/TravelWithMe";
import Contact from "./component/Contact";
import Follow from "./component/Follow";
import SliderComponent from './component/slider-component'
import  "./horizontal.css" ;

export default class Layout extends React.Component {
      constructor(props){
        super(props);
        this.name = "Nitesh";
    } 
    render(){
      let slideDuration = 3000;
        return (
            <div className="app-container">
            <Header />
            <SliderComponent slideDuration={slideDuration}/>
            <AboutMe />
            <Gallery /> 
            <TravelWithMe />
            <Contact />
            <Follow />
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