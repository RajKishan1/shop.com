import { Mail } from "lucide-react";
import React from "react";

const Offer = () => {
  return (
    <div className="relative w-full h-80 lg:h-64 ">
      <div className="absolute w-[95%] lg:w-[80%]  top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]  h-auto lg:h-40 bg-black rounded-2xl flex flex-col lg:flex-row items-center justify-between py-3 px-1 lg:px-20">
        <h1 className="w-[90%] lg:w-2/5 text-2xl my-3 lg:text-4xl font-integral text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <span className="w-5/6 lg:w-[25%] flex flex-col gap-3 py-2">
          <div className="bg-white h-11 rounded-full overflow-hidden flex items-center px-4">
            <Mail className="text-slate-500 mr-2 " height={16} />
            <input type="text" placeholder="Enter your e-mail address here" className="w-full outline-none text-black"/>
          </div>
          <div className="rounded-full h-11 bg-white flex items-center px-3">
            <button className="h-full w-full text-black font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </span>
      </div>
      <div className="w-full h-1/2 bg-white "></div>
      <div className="w-full h-1/2 bg-neutral-100 "></div>
    </div>
  );
};

export default Offer;
