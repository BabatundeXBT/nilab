import React from "react";
import case1 from "../assets/images/case1.png";
import case2 from "../assets/images/case2.png";
import case3 from "../assets/images/case3.png";
import BlogCaseCard from "./BlogCaseCard";

const BlogCase = ({ header = "Case Studies" }) => {
  const data = [
    {
      img: case1,
      title: "Web design & development",
      subtitle: "Boost Directories",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
    {
      img: case2,
      title: "Web design & development",
      subtitle: "Navsports Directory",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
    {
      img: case3,
      title: "E-commerce development",
      subtitle: "Artego Skin Care",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
  ];
  return (
    <>
      <div className="py-12">
        <div className="py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0e223b]">{header}</h1>
        </div>
        <div className="m-auto flex w-[90%] flex-col gap-5 md:w-[75%] md:flex-row">
          {data.map((value, index) => {
            return (
              <BlogCaseCard
                key={index}
                img={value.img}
                title={value.title}
                subtitle={value.subtitle}
                info={value.info}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogCase;
