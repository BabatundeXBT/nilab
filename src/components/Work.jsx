import React from "react";
import BlogCaseCard from "./BlogCaseCard";
import { FaGreaterThan } from "react-icons/fa";
import case1 from "../assets/images/case1.png";
import case2 from "../assets/images/case2.png";
import case3 from "../assets/images/case3.png";
import gadgets from "../assets/images/gadgets.png";
import trainer from "../assets/images/trainer.png";
import realEstate from "../assets/images/real-estate.png";
import { NavLink } from "react-router-dom";
import Button from "./ui/Button";

const Work = () => {
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
    {
      img: gadgets,
      title: "E-commerce development",
      subtitle: "Megaphone Plus Ecommerce",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
    {
      img: trainer,
      title: "Wordpress web design",
      subtitle: "Alpha Cleaning Service",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
    {
      img: realEstate,
      title: "Web design & development",
      subtitle: "Slushy Syrup Australia",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
  ];

  return (
    <>
      <div className="bg-[#e9e9e9] py-28 shadow-md">
        <div className="m-auto mb-16 w-[90%] md:w-[75%]">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-[blue]">
              Our latest work
            </h3>
            <h2 className="py-5 text-4xl font-bold text-black md:text-5xl">
              Case Studies
            </h2>
            <p className="w-[360px] pb-5 text-lg font-semibold text-slate-400 md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laboriosam unde fuga rerum corrupti. Itaque magnam sed maiores in
              tempora placeat consequuntur consequatur. Culpa, fugiat?
            </p>
          </div>
        </div>
        <div className="">
          <div className="m-auto grid w-[90%] grid-cols-1 gap-5 md:w-[75%] md:grid-cols-3">
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
        <div className="flex justify-center">
          <NavLink className="flex" to="work">
            <Button>
              MORE CASE STUDIES{" "}
              <FaGreaterThan className="inline self-center ps-2" />
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Work;
