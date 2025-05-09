import React from "react";
import { FaStar } from "react-icons/fa6";
import ceo from "../assets/images/testimonials-base.png";

const Ceo = () => {
  return (
    <>
      <div>
        <div className="m-auto my-10 grid w-[90%] grid-cols-1 md:w-[60%] md:grid-cols-2">
          <div className="m-auto w-[100%] md:w-[80%]">
            <img src={ceo} alt="" />
          </div>
          <div className="self-center pt-16">
            <p className="text-2xl text-slate-400">
              Momentum truly is a full-service marketing agency. They helped my
              business through data-driven strategies and innovative campaigns.
              The team is friendly and always up to the challenge!
            </p>
            <div className="flex py-5">
              <FaStar className="text-xl text-yellow-300" />
              <FaStar className="text-xl text-yellow-300" />
              <FaStar className="text-xl text-yellow-300" />
              <FaStar className="text-xl text-yellow-300" />
              <FaStar className="text-xl text-yellow-300" />
            </div>
            <h3 className="text-xl font-bold text-[#0e223b] md:text-2xl">
              Martha Jones, CEO @ Kids Store
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ceo;
