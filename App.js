import React from "react";
import Header from "./component/Header"; 
import Footer from "./component/Footer";
import AboutMe from "./component/AboutMe";
import Gallery from "./component/Gallery";
import TravelWithMe from "./component/TravelWithMe";
import Contact from "./component/Contact";
import Follow from "./component/Follow";
import SliderComponent from './component/slider-component';
import  "./horizontal.css" ;

export default class Layout extends React.Component {

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


