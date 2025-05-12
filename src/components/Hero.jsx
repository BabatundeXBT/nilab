import React from "react";
import steve from "../assets/images/steve.png";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import { NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <>
      <div className="m-auto my-10 flex flex-col gap-10 sm:w-[100%] md:flex-row lg:w-[75%]">
        <div className="relative flex w-[100%] self-center sm:w-[50%]">
          <div className="relative flex">
            <img src={hero1} alt="" className="absolute z-[9999]" />
            <img src={hero2} alt="" className="absolute z-[9999]" />
            <img src={hero3} alt="" className="z-[9999]" />
            <img src={steve} alt="" className="absolute w-[100%]" />
          </div>
        </div>
        <div className="m-auto w-[90%] self-center sm:w-[50%]">
          <h2 className="text-2xl font-semibold text-[#d62264] md:text-3xl">
            Web Development, App Development & UI/UX Design, & more
          </h2>
          <h1 className="py-8 text-4xl font-bold md:text-5xl">
            Creative| design <br /> generates results
          </h1>
          <p className="w-auto text-lg font-semibold text-slate-300 md:w-[600px] md:text-xl">
            Next Innovation Hub isn’t just another software company — it’s a
            leading Web development hub for modern thinkers in California.
          </p>
          <div className="my-14 flex">
            <button className="flex rounded-xl bg-[blue] px-7 py-3 font-semibold text-white hover:bg-black">
              GET STARTED <FaGreaterThan className="inline self-center ps-2" />
            </button>

            <div className="self-center">
              <NavLink to="about" className="ps-10 font-semibold">
                LET'S TALK
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
