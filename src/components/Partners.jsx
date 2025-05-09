import React from "react";
import dan from '../assets/images/dan-1.png'
import cl from '../assets/images/cl.png'
import thedrum from '../assets/images/thedrum.png'
import cssd from '../assets/images/css-design-1.png'
import awww from '../assets/images/awwwards-1.png'

const Partners = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-[90%] md:w-[50%] m-auto my-8">
        <img src={dan} alt="" className="w-[50%] md:w-auto self-center"/>
        <img src={awww} alt="" className="w-[50%] md:w-auto self-center"/>
        <img src={cl} alt="" className="w-[50%] md:w-[60%] self-center"/>
        <img src={cssd} alt="" className="w-[50%] md:w-auto self-center"/>
        <img src={thedrum} alt="" className="w-[50%] md:w-[90%] self-center"/>
      </div>
    </div>
  );
};

export default Partners;
