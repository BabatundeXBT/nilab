import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCad = ({ title, subtitle, info }) => {
  return (
    <>
      <div>
        <div>
          <h3 className="text-2xl font-semibold text-[blue]">{title}</h3>
          <h2 className="py-6 text-3xl font-bold">{subtitle}</h2>
          <p className="text-lg font-semibold text-slate-400">{info}</p>
          <div className="py-6">
            <NavLink to="" className="font-semibold">
              LEARN MORE
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCad;
