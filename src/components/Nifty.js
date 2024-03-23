import React from "react";
import NSE from "../assets/nse-logo.png";
import { FaArrowDown } from "react-icons/fa";

const Nifty = () => {
  return (
    <div className="mt-3 py-3">
      <div className="w-auto mx-auto grid lg:grid-cols-3 lg:gap-y-0 gap-y-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center  gap-3">
            <img src={NSE} className="h-7 w-7" />
            <p className="font-bold text-lg">NIFTY 50</p>
          </div>
          <div className="flex items-center  gap-4">
            <p>₹2376</p>
            <FaArrowDown className="text-red-500" />
            <p className="text-red-600">(0.113%)</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className=" rounded w-max flex items-center justify-center bg-white">
            <p className="rounded bg-white hover:bg-blue-500 hover:text-white py-0.5 px-1.5">
              5min
            </p>
            <p className="rounded bg-white hover:bg-blue-500 hover:text-white py-0.5 px-1.5">
              10min
            </p>
            <p className="rounded bg-white hover:bg-blue-500 hover:text-white py-0.5 px-1.5">
              15min
            </p>
            <p className="rounded bg-white hover:bg-blue-500 hover:text-white py-0.5 px-1.5">
              30min
            </p>
            <p className="rounded bg-white hover:bg-blue-500 hover:text-white py-0.5 px-1.5">
              Hour
            </p>
            <p className="rounded bg-white hover:bg-blue-500 hover:text-white py-0.5 px-1.5">
              1 Day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nifty;