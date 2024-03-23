import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Bar from "../assets/bar.png";
import { FaRegDotCircle } from "react-icons/fa";

const Oscillators = () => {
  const left = Math.floor(Math.random() * 200);
  const top = Math.floor(Math.random() * 20);

  const custom = {
    top: top,
    left: left,
  };
  return (
    <div>
      <div className="flex flex-col bg-white rounded">
        <div className="flex items-center justify-between px-10 py-4">
          <p className="font-bold">Oscillators</p>
          <IoIosInformationCircleOutline className="h-6 w-6 text-gray-400" />
        </div>
        <div className="flex items-center justify-center py-5">
          <FaRegDotCircle className=" text-blue-600 relative" style={custom} />
          <img src={Bar} className="" />
        </div>
        <div className="w-auto mx-auto flex items-center gap-x-8 my-3">
          <div className="flex flex-col gap-y-2 items-center justify-center mx-5">
            <p>11</p>
            <p className=" text-red-500 bg-red-100 rounded px-2">Bearish</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center justify-center mx-5">
            <p>2</p>
            <p className=" text-gray-500 bg-gray-200 rounded px-2">Neutral</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center justify-center mx-5">
            <p>4</p>
            <p className=" text-blue-700 bg-blue-200 rounded px-2">Bullish</p>
          </div>
        </div>
        <div className="w-full mx-auto flex flex-col gap-4 px-20">
          <div className="w-auto flex items-center justify-between ">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gray-300 rounded flex items-center justify-center h-6 w-6">
                <p>N</p>
              </div>
              <p>RSI (14)</p>
            </div>
            <p>41.60</p>
          </div>
          <div className="w-auto flex items-center justify-between ">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gray-300 rounded flex items-center justify-center h-6 w-6">
                <p>N</p>
              </div>
              <p>Stock %K(14,3,3)</p>
            </div>
            <p>7.32</p>
          </div>
        </div>
        <div className="w-full mx-auto flex items-center justify-end px-16 py-6 text-gray-400">
          <p>View Details</p>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
};

export default Oscillators;