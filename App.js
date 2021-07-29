import React from "react";
import Header from "../src/component/Header"; 
import Footer from "../src/component/Footer";
import AboutMe from "../src/component/AboutMe";
import Gallery from "../src/component/Gallery";
import TravelWithMe from "../src/component/TravelWithMe";
import Contact from "../src/component/Contact";
import Follow from "../src/component/Follow";
import SliderComponent from '../src/component/slider-component';
import  "../src/horizontal.css" ;
//For full gallery page
//import CandidGallery from "../src/component/CandidGallery";
//import {Route, Link} from "react-router-dom";


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
            {/* <Candid_gallery /> */}
            </div>
        );
    }
}


