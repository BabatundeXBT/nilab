import React from "react";

const BlogCard = ({ img, content }) => {
  return (
    <>
      <div className="hover:text-[blue] text-black">
        <div className="">
          <div className="shadow-md">
            <a href="">
              <img src={img} alt="" className="w-[600px] md:h-[400px]" />
            </a>
          </div>
          <div>
            <h2 className="py-5  text-3xl font-semibold">
              <a href="" className="">{content}</a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
