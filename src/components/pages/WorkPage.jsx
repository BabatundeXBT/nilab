import React from "react";
import { useState } from "react";
import kids from "../../assets/images/kids.png";
import iflow from "../../assets/images/iflow.png";
import case1 from "../../assets/images/case1.png";
import case2 from "../../assets/images/case2.png";
import case3 from "../../assets/images/case3.png";
import doctors from "../../assets/images/doctors.png";
import gadgets from "../../assets/images/gadgets.png";
import trainer from "../../assets/images/trainer.png";
import blockchain from "../../assets/images/blockchain.png";
import realEstate from "../../assets/images/real-estate.png";
import BlogCaseCard from "../BlogCaseCard";
import BlogCase from "../BlogCase";
import Button from "../ui/Button";
import { FaGreaterThan } from "react-icons/fa";

const WorkPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(data.length);
      setIsLoading(false);
    }, 2000);
  };

  // const handleLoadMore = () => {
  //   setVisibleCount(data.length); // Show all items
  // };

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
    {
      img: kids,
      title: "E-commerce development",
      subtitle: "Artego Skin Care",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
    {
      img: doctors,
      title: "E-commerce development",
      subtitle: "Megaphone Plus Ecommerce",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
    {
      img: iflow,
      title: "Wordpress web design",
      subtitle: "Alpha Cleaning Service",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
    {
      img: blockchain,
      title: "Web design & development",
      subtitle: "Slushy Syrup Australia",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iusto repudiandae maiores fugiat debitis autem quasi minima quibusdam quas molestias.",
    },
  ];

  return (
    <>
      <div>
        {/* hero section  */}
        <div className="m-auto my-16 w-[95%] md:w-[75%]">
          <div className="text-center">
            <h2 className="m-auto w-[60%] text-4xl font-bold text-[#0e223b] md:text-7xl">
              Case Studies
            </h2>
            <h3 className="py-6 text-2xl font-bold text-[#0e223b]">
              Making our client's brands shine brighter since 2006
            </h3>
            <p className="m-auto w-[370px] pb-5 text-xl font-semibold text-slate-400 md:w-[700px]">
              We are proud of our work and the results we have achieved for our
              clients. Explore some of our web development & design projects:
            </p>
          </div>
        </div>

        {/* cards  */}
        <div className="bg-[#e9e9e9] py-28 shadow-md">
          <div className="">
            <div className="m-auto grid w-[90%] grid-cols-1 gap-5 md:w-[75%] md:grid-cols-3">
              {data.slice(0, visibleCount).map((value, index) => {
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
          {/* <div className="flex justify-center pt-5">
            {/* <Button>LOAD MORE</Button> 
            {visibleCount < data.length && (
              <div className="flex justify-center pt-5">
                <button onClick={handleLoadMore}>load more</button>
                {/* <Button onClick={handleLoadMore}>LOAD MORE</Button> 
              </div>
            )}
          </div> */}
          <div className="flex justify-center pt-5">
            {isLoading ? (
              <div className="flex items-center gap-2 text-lg font-semibold text-blue-600">
                <svg
                  className="h-6 w-6 animate-spin text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Loading more items...
              </div>
            ) : (
              visibleCount < data.length && (
                <button
                  onClick={handleLoadMore}
                  className="rounded-md bg-blue-400 px-4 py-2 font-semibold text-black hover:bg-[#0e223b] hover:text-white"
                >
                  LOAD MORE
                </button>
              )
            )}
          </div>
        </div>

        {/* services link  */}
        <div className="my-20">
          <div>
            <h2 className="m-auto py-10 text-center text-4xl font-bold text-[#0e223b] md:text-6xl">
              Awesome services
            </h2>
          </div>
          <div className="m-auto grid w-[90%] grid-cols-1 justify-between gap-4 md:w-[60%] md:grid-cols-3 md:pt-8">
            <div className="ms-8 md:ms-0">
              <ul className="space-y-4 text-xl font-bold text-[#0e223b]">
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">User experience design</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Search engine optimization</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Web design & development</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">E-commerce development</a>
                </li>
              </ul>
            </div>
            <div className="ms-8 md:ms-0">
              <ul className="space-y-4 text-xl font-bold text-[#0e223b]">
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Software as a service</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Branding & visual design</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Content & copywriting</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Email marketing</a>
                </li>
              </ul>
            </div>
            <div className="ms-8 md:ms-0">
              <ul className="space-y-4 text-xl font-bold text-[#0e223b]">
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Pay per click management</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Social media marketing</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Strategy & consulting</a>
                </li>
                <li className="list flex">
                  <FaGreaterThan className="list-icon self-center pr-2" />
                  <a href="">Wordpress web design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
