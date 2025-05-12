import React from "react";
import { FaInstagram, FaGreaterThan } from "react-icons/fa";
import { FaLinkedinIn, FaX } from "react-icons/fa6";
import menu from "../assets/images/menu-dude.png";
import { NavLink } from "react-router-dom";

const HoverService = () => {
  return (
    <>
      <div className="">
        <div className="relative m-auto hidden w-[75%] shadow-md md:block">
          <div className="grid grid-cols-3 gap-10 p-8">
            {/* col1 */}
            <div>
              <div>
                <div className="flex">
                  <div className="self-center pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.318 19c-1.611 0-3.269-.709-4.318-2.168l.491.021c3.979 0 2.612-4.516 6.696-4.559l1.84 1.535c.28 3.393-2.156 5.171-4.709 5.171zm9.748-9.283c1.186-1.862 3.832-6.82 4.844-8.748.063-.109.09-.218.09-.323 0-.353-.312-.646-.656-.646-.137 0-.279.047-.408.155-1.67 1.413-5.898 5.02-7.512 6.525-1.531 1.432-1.537 2.087-2.033 4.448l1.68 1.4c2.226-.915 2.867-1.04 3.995-2.811zm.934 2.106v10.177h-18v-14h10.098c.654-1.789 1.74-2.664 5.604-6h-17.702v22h22v-15.317c-.689 1.215-1.275 2.266-2 3.14z"
                        fill="blue"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="self-center text-xl font-bold text-[#0e223b]">
                      Web Design & Development
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="py-5 font-semibold text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos sed placeat soluta vero. Quibusdam, deleniti!
                  </p>
                </div>
              </div>
              <hr />
              <div className="py-8">
                <ul className="text-l space-y-3 font-bold text-[#0e223b]">
                  <li className="sev-list flex">
                    <a href="">UI/UX design</a>
                  </li>
                  <li className="sev-list flex">
                    <a href="">Mobile App Development</a>
                  </li>
                  <li className="sev-list flex">
                    <a href="">Web design & development</a>
                  </li>
                  <li className="sev-list flex">
                    <a href="">WordPress web design</a>
                  </li>
                  <li className="sev-list flex">
                    <a href="">Graphics Design</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* col2 */}
              <div>
                <div className="flex">
                  <div className="self-center pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 9v8h-2v-8h2zm2-2h-6v12h6v-12zm6-4v14h-2v-14h2zm2-2h-6v18h6v-18zm6 13v3h-2v-3h2zm2-2h-6v7h6v-7zm1 9h-24v2h24v-2z"
                        fill="blue"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0e223b]">
                      Digital Marketing Services
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="py-5 font-semibold text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos sed placeat soluta vero. Quibusdam, deleniti!
                  </p>
                </div>
              </div>
              <hr />
              <div className="py-8">
                <ul className="text-l space-y-3 font-bold text-black">
                  <li className="sev-list flex">
                    <a href="">Search engine optimization</a>
                  </li>
                  <li className="sev-list flex">
                    <a href="">Social media makerting</a>
                  </li>
                  <li className="sev-list flex">
                    <a href="">Strategy & consulting</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="w-[100%]">
                <img src={menu} alt="" />
              </div>
              <div className="absolute left-28 top-64 flex justify-center py-10">
                <NavLink to="work">
                  <button className="flex rounded-xl border bg-white px-5 py-3 font-semibold text-blue-500 shadow-md hover:text-[#0e223b]">
                    VIEW OUR WORk{" "}
                    <FaGreaterThan className="inline self-center ps-2" />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute left-8 top-96 m-auto flex w-[95%] gap-8">
            <a href="" className="text-slate-400 hover:text-black">
              <FaInstagram />
            </a>
            <a href="" className="text-slate-400 hover:text-black">
              <FaLinkedinIn />
            </a>
            <a href="" className="text-slate-400 hover:text-black">
              {/* <FaTwitter /> */}
              <FaX />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverService;
