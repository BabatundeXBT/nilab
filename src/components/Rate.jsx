import React from "react";

const Rate = () => {
  return (
    <>
      <div className="my-10">
        <div className="m-auto grid grid-cols-1 justify-items-center gap-10 py-20 shadow-lg md:w-[60%] md:grid-cols-3">
          <div className="m-auto flex gap-3 justify-self-center text-center">
            <div>
              <h3 className="text-6xl font-bold text-purple-500 md:text-7xl">
                +7
              </h3>
            </div>
            <div>
              <h3 className="w-[100px] text-left text-xl font-bold text-slate-400">
                Years of experience
              </h3>
            </div>
          </div>
          <div className="m-auto flex gap-3 justify-self-center text-center">
            <div>
              <h3 className="text-6xl font-bold text-pink-500 md:text-7xl">
                +30
              </h3>
            </div>
            <div>
              <h3 className="w-[100px] text-left text-xl font-bold text-slate-400">
                Completed projects
              </h3>
            </div>
          </div>
          <div className="m-auto flex gap-3 justify-self-center text-center">
            <div>
              <h3 className="text-6xl font-bold text-blue-500 md:text-7xl">
                +3
              </h3>
            </div>
            <div>
              <h3 className="w-[150px] text-left text-xl font-bold text-slate-400">
                Built innovative startup
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rate;
