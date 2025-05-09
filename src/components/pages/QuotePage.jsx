import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Form from "../Form";

const QuotePage = () => {
  return (
    <>
      <div className="my-10">
        <div>
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-blue-400">Contact Us</h4>
            <h2 className="py-5 text-5xl font-bold text-[#0e223b] md:text-7xl">
              We are Momentum!
            </h2>
          </div>
          <div className="py-5 text-5xl font-bold text-slate-400 md:text-7xl">
            <marquee behavior="" direction="">
              Get in touch with our team - Get in touch with our team - Get in
              touch with our team
            </marquee>
          </div>
        </div>
        <div className="bg-[#e9e9e9] py-20">
          {/* form  */}
          <div className="">
            
            <Form />
          </div>

          {/* other */}
          <div className="m-auto grid w-[90%] grid-cols-1 content-center md:w-[75%] md:grid-cols-2">
            <div className="justify-self-center text-center">
              <h2 className="py-5 text-4xl font-bold text-[#0e223b] md:text-6xl">
                General Inquiries
              </h2>
              <a
                href="mailto:bbt@gmail.com"
                className="font-semibold text-slate-500 hover:text-blue-400"
              >
                bbt@gmail.com
              </a>
            </div>
            <div className="justify-self-center">
              <h2 className="py-5 text-4xl font-bold text-[#0e223b] md:text-6xl">
                Social Networks
              </h2>
              <div className="m-auto flex justify-center gap-7">
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto my-5 w-[90%] md:w-[75%]">
          <div className="my-10 text-center">
            <h4 className="text-2xl font-semibold text-blue-400">
              Let's Meet!
            </h4>
            <h2 className="py-5 text-5xl font-bold text-[#0e223b] md:text-7xl">
              Headquarters!
            </h2>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.111666544766!2d7.249888812008736!3d8.969574552815654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7b8d8009c6d1%3A0xf93f66f22685f4d!2sNigerian%20Air%20Force%20(NAF)%20Hospital!5e0!3m2!1sen!2sng!4v1746138090003!5m2!1sen!2sng" width="600" height="450"className="w-[100%]"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.328345181281!2d8.452484025907689!3d11.951753686414671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7f8ee967f653%3A0x956e8643065ee55!2sDorayi%20Babba%2C%20Kano!5e0!3m2!1sen!2sng!4v1746136840606!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[100%]"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default QuotePage;
