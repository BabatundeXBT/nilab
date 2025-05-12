import React from "react";
import BlogCard from "./BlogCard";
import cam from "../assets/images/cam.jpg";
import cam2 from "../assets/images/cam2.jpg";
import cam3 from "../assets/images/cam3.jpg";
import Button from "./ui/Button";
import { NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const Blog = ({header='Latest Articles',pageTitle='from our blog'}) => {
  const data = [
    {
      img: cam,
      content:
        "New Small Camera Review: Pricing is Not Always the Only Criteria",
    },
    {
      img: cam2,
      content:
        "How Can Influencers Show Glamour and Class Selling on Instagram",
    },
    {
      img: cam3,
      content:
        "Mobile Marketing is the Future of E-Commerce, Real-World Study Finds",
    },
  ];
  return (
    <>
      <div className="py-12">
        <div className="py-12 text-center">
          <p className="py-5 text-3xl font-semibold text-[blue]">{pageTitle}</p>
          <h1 className="text-4xl md:text-6xl text-black font-bold">{header}</h1>
        </div>
        <div className="m-auto flex w-[90%] flex-col gap-5 md:w-[75%] md:flex-row">
          {data.map((value, index) => {
            return (
              <BlogCard key={index} img={value.img} content={value.content} />
            );
          })}
        </div>
        <div className="flex justify-center py-12">
          <Button>
            <NavLink to="blog" className='flex'>READ MORE ARTICLES <FaGreaterThan className="inline self-center ps-2"/></NavLink>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Blog;
