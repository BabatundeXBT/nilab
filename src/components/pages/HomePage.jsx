import React from "react";
import Hero from "../Hero";
import Partners from "../Partners";
import Blog from "../Blog";
import BlogCard from "../BlogCard";
import Service from "../Service";
import WhyUs from "../WhyUs";
import Skills from "../Skills";
import WhoWeAre from "../WhoWeAre";
import Ceo from "../Ceo";
import Rate from "../Rate";
import Work from "../Work";
import HoverService from "../HoverService";

const HomePage = () => {
  return (
    <>
      {/* <HoverService/> */}
      <Hero />
      <Partners />
      <WhyUs/>
      <WhoWeAre/>
      <Rate/>
      <Service />
      <Work/>
      <Ceo/>
      <Blog />
    </>
  );
};

export default HomePage;
