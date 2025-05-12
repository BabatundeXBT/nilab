import React from "react";
import team from "../assets/images/team-svgrepo-com.svg";
import clock from "../assets/images/clock-svgrepo-com.svg";
import flex from "../assets/images/flexible-access-svgrepo-com.svg";

const WhyUs = () => {
  return (
    <div className="bg-[#e9e9e9] py-6">
      <div className="m-auto my-20 w-[90%] md:w-[75%]">
        <h1 className="py-4 text-center text-3xl font-bold text-black md:text-6xl">
          Why Next Innovation Hub?
        </h1>
        <div className="grid grid-cols-1 py-8 md:grid-cols-3">
          <div className="text-center">
            <div className="m-auto w-32">
              <img src={flex} alt="" />
            </div>
            <h3 className="m-auto w-[300px] py-4 text-4xl font-bold text-black md:text-3xl">
              Client-Centered Approach
            </h3>
            <p className="m-auto pb-5 font-semibold text-slate-400 md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis inventore dolore id corrupti distinctio excepturi
              dignissimos, ex voluptatibus dolorum iusto quisquam aliquid,
              placeat sunt. Excepturi!
            </p>
          </div>
          <div className="py-3 text-center">
            <div className="m-auto w-32">
              <img src={team} alt="" />
            </div>
            <h3 className="py-4 text-4xl font-bold text-black md:text-3xl">
              Skilled and Smart Team
            </h3>
            <p className="m-auto pb-5 font-semibold text-slate-400 md:w-[400px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              vel hic temporibus inventore nobis recusandae facilis itaque
              perspiciatis. Harum odio pariatur ipsum eveniet, necessitatibus
              quisquam est vero.
            </p>
          </div>
          <div className="text-center">
            <div className="m-auto w-32">
              <img src={clock} alt="" />
            </div>
            <h3 className="m-auto w-[300px] py-4 text-4xl font-bold text-black md:text-3xl">
              More Than Just a Service
            </h3>
            <p className="m-auto font-semibold text-slate-400 md:w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              quasi laudantium ullam ex magnam veritatis dolor unde veniam esse
              repellat. Repellendus architecto doloremque laborum natus soluta
              reiciendis facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
