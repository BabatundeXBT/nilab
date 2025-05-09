import React from "react";

const BlogCaseCard = ({ img, title, subtitle, info }) => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="shadow-md">
            <a href="">
              <img src={img} alt="" className="w-[600px] md:h-[400px]" />
            </a>
          </div>
          <div className="py-12">
            <h1 className="font-bold text-blue-500">{title}</h1>
            <h2 className="py-4 text-3xl font-bold text-[#0e223b] hover:text-blue-500">
              <a href="" className="">
                {subtitle}
              </a>
            </h2>
            <p className="font-semibold text-slate-400 md:w-96">{info}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCaseCard;
