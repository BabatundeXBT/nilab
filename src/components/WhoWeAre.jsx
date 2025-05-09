import React from "react";
import who from "../assets/images/who-we-are-base.png";
import Button from "./ui/Button";
import Skills from "./Skills";

const WhoWeAre = () => {
  return (
    <>
      <div className="m-auto my-16 flex w-[90%] flex-col-reverse justify-between gap-20 md:w-[75%] md:flex-row">
        <div className="w-[100%]">
          <div className="pt-10">
            <h3 className="text-xl font-bold text-blue-500">
              Mastermind team behind solution
            </h3>
            <h1 className="py-4 text-4xl font-bold text-[#0e223b] md:text-6xl">
              Who we are
            </h1>
            <p className="pb-5 font-semibold text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              ipsum sunt, aliquid cupiditate molestiae sed repudiandae
              praesentium minima temporibus quam cumque esse. Esse, molestiae
              laboriosam error sequi obcaecati officiis voluptas ullam, iure
              dignissimos expedita enim tempora quia animi numquam similique?
            </p>
          </div>
          <div>
            <Skills />
          </div>
          <div className="py-5">
            <Button>MORE ABOUT US</Button>
          </div>
        </div>
        <div className="w-[100%] self-center">
          <img src={who} alt="person" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
