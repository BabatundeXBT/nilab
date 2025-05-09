import React from "react";
import ServiceCad from "./ServiceCad";
import { FaGreaterThan, FaStar, FaStarOfDavid } from "react-icons/fa";
import { FaStarAndCrescent } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Service = () => {
  const data = [
    {
      title: "Ux/Ui",
      subtitle: "User experience design",
      info: "Design isn’t just about looks; it’s about experience. We craft clean, user-friendly designs that simplify complexity and captivate your audience.",
    },
    {
      title: "Mobile App",
      subtitle: "Mobile App Development",
      info: "Great apps are born from great ideas. We transform your vision into beautifully designed, intuitive apps that seamlessly integrate with users’ lives, just as Steve Jobs envisioned technology to do.",
    },
    {
      title: "Web",
      subtitle: "Web design & development",
      info: "We don’t just build websites—we create digital experiences that connect with your audience and leave a lasting impression. We focus on the perfect balance of form and function.",
    },
    {
      title: "Shops",
      subtitle: "E-commerce development",
      info: "We build ecommerce websites that do more than sell—they create exceptional customer journeys. Every detail is crafted to turn your online store into a place where users love to shop, just as Apple made its products irresistible.",
    },
    {
      title: "Wordpress",
      subtitle: "Wordpress Web Development",
      info: "We harness the full potential of WordPress to create powerful, flexible websites. Our solutions are intuitive and beautiful, transforming your vision into reality with the same attention to detail that defines true innovation.",
    },
    {
      title: "Design",
      subtitle: "Graphics Design",
      info: "We design with purpose, creating visuals that not only stand out but tell your brand’s story. Inspired by Jobs’ belief in design as a powerful tool, our designs evoke emotion and make a lasting impact.",
    },
  ];

  return (
    <div className="py-12" id="service">
      <div className="m-auto w-[90%] text-center md:w-[39%]">
        <div className="flex justify-center gap-2 py-4">
          <FaStar className="text-3xl text-yellow-300" />
          <FaStar className="text-3xl text-yellow-300" />
          <FaStar className="text-3xl text-yellow-300" />
          <FaStar className="text-3xl text-yellow-300" />
          <FaStar className="text-3xl text-yellow-300" />
        </div>
        <h2 className="py-6 text-3xl font-bold">Our Services</h2>
        <p className="pb-10 font-semibold text-slate-400">
          We are leading IT company in California working alongside a brilliant
          and innovative team ready to reshape the IT landscape, offering
          top-notch services in web development, app development, UI/UX design,
          and graphics design.
        </p>
      </div>
      <div className="m-auto grid w-[90%] grid-cols-1 gap-5 md:w-[75%] md:grid-cols-3">
        {data.map((value, index) => {
          return (
            <ServiceCad
              key={index}
              title={value.title}
              subtitle={value.subtitle}
              info={value.info}
            />
          );
        })}
      </div>
      <div className="flex justify-center py-10">
        <button className="flex rounded-xl bg-[#0e223b] px-7 py-3 font-semibold text-white hover:bg-blue-400 hover:text-black">
          <NavLink to="">
            VIEW ALL SERVICES{" "}
            <FaGreaterThan className="inline self-center ps-2" />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Service;
