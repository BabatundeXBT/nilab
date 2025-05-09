import React from "react";

const Card = ({ img, name, rank, socials }) => {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center">
          <div className="w-[80%] m-auto">
            <img src={img} alt="" className="rounded-full " />
          </div>
          <div className="py-5 text-center self-center">
            <h3 className=" text-3xl font-bold text-[#0e223b]">{name}</h3>
            <p className="py-2 font-semibold text-slate-400 md:w-96">{rank}</p>
            <div>
              <a href="" className="">
                {socials}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
