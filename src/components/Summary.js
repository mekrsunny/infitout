import React from "react";
import Bar from "../assets/bar.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";

const Summary = () => {
  const left = Math.floor(Math.random() * 200);
  const top = Math.floor(Math.random() * 20);

  const custom = {
    top: top,
    left: left,
  };

  return (
    <div className="flex flex-col bg-white rounded">
      <div className="flex items-center justify-between px-10 py-4">
        <p className="font-bold">Summary</p>
        <IoIosInformationCircleOutline className="h-6 w-6 text-gray-400" />
      </div>
      <div className="flex items-center justify-center py-5">
        <FaRegDotCircle className=" text-blue-600 relative" style={custom} />
        <img src={Bar} className="" />
      </div>
      <div className="w-auto mx-auto flex items-center gap-x-8 my-3">
        <div className="flex flex-col gap-y-2 items-center justify-center mx-5">
          <p>14</p>
          <p className=" text-red-500 bg-red-100 rounded px-2">Bearish</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center mx-5">
          <p>8</p>
          <p className=" text-gray-500 bg-gray-200 rounded px-2">Neutral</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center mx-5">
          <p>5</p>
          <p className=" text-green-600 bg-green-100 rounded px-2">Bullish</p>
        </div>
      </div>
      <div className="w-auto mx-auto grid grid-cols-3  gap-y-4 gap-x-15 my-4">
        <div className="mx-10 flex items-start flex-col">
          <p className=" font-bold">22074.34</p>
          <p className=" text-gray-400">EMA (20)</p>
        </div>
        <div className="mx-10 flex items-start flex-col">
          <p className=" font-bold">22164.35</p>
          <p className=" text-gray-400">SMA (20)</p>
        </div>
        <div className="mx-10 flex items-start flex-col">
          <p className=" font-bold">41.60</p>
          <p className=" text-gray-400">RSN (14)</p>
        </div>
        <div className="mx-10 flex items-start flex-col">
          <p className=" font-bold">-81.68</p>
          <p className=" text-gray-400">Aesome Osc</p>
        </div>
        <div className="mx-10 flex items-start flex-col">
          <p className=" font-bold">13.49</p>
          <p className=" text-gray-400">Msco (12,26,9)</p>
        </div>
        <div className="mx-10 flex items-start flex-col">
          <p className=" font-bold">-161.87</p>
          <p className=" text-gray-400">CCI (20)</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;