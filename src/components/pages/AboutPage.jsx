import React from "react";
import BlogCase from "../BlogCase";
import heroAbout from "../../assets/images/hero-about1.png";
import { NavLink } from "react-router-dom";
import CardData from "../CardData";
import { FaGreaterThan } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <div className="my-10">
        {/* hero section  */}
        <div className="m-auto w-[90%] md:w-[75%]">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-500">About Us</h3>
            <h2 className="m-auto w-[60%] py-6 text-4xl font-bold text-[#0e223b] md:text-7xl">
              We are Momentum!
            </h2>
            <p className="m-auto w-[300px] pb-5 font-semibold text-slate-400 md:w-[700px]">
              We absolutely love helping individuals, companies, agencies and
              general society really benefit from the power of data by
              delivering excellency on point.
            </p>
          </div>
          <div className="flex justify-center shadow-md">
            <img src={heroAbout} alt="" />
          </div>
        </div>

        {/* crew  */}
        <div>
          <div className="m-auto my-28 w-[90%] md:w-[75%]">
            <div className="self-center">
              <h2 className="text-2xl font-semibold text-blue-500 md:text-3xl">
                Our crew
              </h2>
              <h1 className="py-4 text-4xl font-bold md:text-5xl">
                Making it happen
              </h1>
              <p className="w-auto text-lg font-semibold text-slate-400 md:w-[600px] md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nihil doloremque aliquam rem officiis temporibus.
              </p>
              <div className="my-8 flex">
                <NavLink to="/quote">
                  <button className="flex rounded-xl bg-[#0e223b] px-7 py-3 font-semibold text-white hover:bg-blue-400 hover:text-black md:py-4">
                    CONTACT US{" "}
                    <FaGreaterThan className="inline self-center ps-2" />
                  </button>
                </NavLink>
                <div className="self-center">
                  <NavLink to="/" className="ps-10 font-bold">
                    OUR SERVICES
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <CardData />
        </div>

        {/* what we believe section  */}
        <div className="m-auto my-20 w-[90%] md:w-[75%]">
          <h1 className="py-4 text-4xl font-bold text-[#0e223b] md:text-6xl">
            What we belive
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <h3 className="py-4 text-2xl font-bold text-[#0e223b] md:text-3xl">
                Love What You Do
              </h3>
              <p className="pb-5 font-semibold text-slate-400 md:w-[400px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam consequuntur commodi repellendus quod nemo nihil
                doloremque iure vero libero sint.
              </p>
            </div>
            <div>
              <h3 className="py-4 text-2xl font-bold text-[#0e223b] md:text-3xl">
                Better Every Day
              </h3>
              <p className="pb-5 font-semibold text-slate-400 md:w-[400px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam consequuntur commodi repellendus quod nemo nihil
                doloremque iure vero libero sint.
              </p>
            </div>
            <div>
              <h3 className="py-4 text-2xl font-bold text-[#0e223b] md:text-3xl">
                Deliver every promise
              </h3>
              <p className="pb-5 font-semibold text-slate-400 md:w-[400px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam consequuntur commodi repellendus quod nemo nihil
                doloremque iure vero libero sint.
              </p>
            </div>
          </div>
        </div>

        {/* rate section  */}
        <div className="">
          <div className="m-auto grid grid-cols-1 justify-items-center gap-10 py-20 md:w-[60%] md:grid-cols-3 md:gap-0">
            <div className="m-auto flex gap-3 justify-self-center border-b-8 border-blue-400 pb-5 text-center md:w-[100%]">
              <div>
                <h3 className="text-6xl font-bold text-[#0e223b] md:text-7xl">
                  +7
                </h3>
              </div>
              <div>
                <h3 className="w-[100px] text-left text-xl font-bold text-slate-400">
                  Years of experience
                </h3>
              </div>
            </div>
            <div className="m-auto flex gap-3 justify-self-center border-b-8 border-blue-600 pb-5 text-center md:w-[100%]">
              <div>
                <h3 className="text-6xl font-bold text-[#0e223b] md:text-7xl">
                  +60
                </h3>
              </div>
              <div>
                <h3 className="w-[100px] text-left text-xl font-bold text-slate-400">
                  Completed projects
                </h3>
              </div>
            </div>
            <div className="m-auto flex gap-3 justify-self-center border-b-8 border-blue-800 pb-5 text-center md:w-[100%]">
              <div>
                <h3 className="text-6xl font-bold text-[#0e223b] md:text-7xl">
                  +90
                </h3>
              </div>
              <div>
                <h3 className="w-[150px] text-left text-xl font-bold text-slate-400">
                  Agency members
                </h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <NavLink to="">
              {" "}
              <button className="flex rounded-md bg-[#0e223b] px-4 py-2 font-semibold text-white hover:bg-blue-400 hover:text-black">
                VIEW OUR SERVICES{" "}
                <FaGreaterThan className="inline self-center ps-2" />
              </button>
            </NavLink>
          </div>
        </div>

        {/* our work section  */}
        <div>
          <BlogCase header="See our work" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
