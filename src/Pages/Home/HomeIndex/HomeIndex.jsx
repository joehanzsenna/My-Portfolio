import React from "react";
import HomeSection1 from "../HomeSections/HomeSection1";
import AboutIndex from "../../About/AboutIndex/AboutIndex";
import ServicesIndex from "../../Services/ServicesIndex/ServicesIndex";

const HomeIndex = () => {
  return <div id="home">
    <HomeSection1/>
    <AboutIndex/>
    <ServicesIndex/>
  </div>;
};

export default HomeIndex;
