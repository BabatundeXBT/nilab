import React from "react";
// import { useState } from "react";

const Button = ({ children,func }) => {

  // const [showFullDes, setShowFullDes] = useState(false);

  // let description = data;
  // console.log(description.slice(0,6));

  // if (!showFullDes) {
  //   description = description.slice(0,6);
  // } 
{/* <button onClick={()=> setShowFullDes((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDes ? 'Less' : 'More'}</button> */}

  return (
    <div>
      <button onClick={func} className="rounded-md bg-[blue] px-4 py-2 font-semibold text-white hover:bg-black hover:text-white">
        {children}{func}
      </button>
    </div>
  );
};

export default Button;
