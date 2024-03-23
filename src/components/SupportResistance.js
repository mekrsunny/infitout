import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Bar from "../assets/bar.png";
import { FaRegDotCircle } from "react-icons/fa";

const SupportResistance = () => {
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
          <p className="font-bold">Suppoprt and Resistance</p>
          <IoIosInformationCircleOutline className="h-6 w-6 text-gray-400" />
        </div>
        <div className="flex items-center justify-center pt-5">
          <FaRegDotCircle className=" text-blue-600 relative" style={custom} />
          <img src={Bar} className="" />
        </div>
        <div className="flex items-center justify-center gap-10 mb-10 py-1.5">
          <div className="flex items-center justify-center gap-10">
            <p>53</p>
            <p>52</p>
            <p>51</p>
          </div>
          <div className="flex items-center justify-center gap-10">
            <p>R1</p>
            <p>R2</p>
            <p>R3</p>
          </div>
        </div>
        <div className="w-auto mx-auto grid grid-cols-3 gap-y-4 gap-x-15 my-10">
          <div className="mx-10 flex items-start flex-col">
            <p className=" font-bold">22074.34</p>
            <p className=" text-gray-400">S1</p>
          </div>
          <div className="mx-10 flex items-start flex-col">
            <p className=" font-bold">22164.35</p>
            <p className=" text-gray-400">S2</p>
          </div>
          <div className="mx-10 flex items-start flex-col">
            <p className=" font-bold">41.60</p>
            <p className=" text-gray-400">S3</p>
          </div>
          <div className="mx-10 flex items-start flex-col">
            <p className=" font-bold">-81.68</p>
            <p className=" text-gray-400">R1</p>
          </div>
          <div className="mx-10 flex items-start flex-col">
            <p className=" font-bold">13.49</p>
            <p className=" text-gray-400">R2</p>
          </div>
          <div className="mx-10 flex items-start flex-col">
            <p className=" font-bold">-161.87</p>
            <p className=" text-gray-400">R3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportResistance;