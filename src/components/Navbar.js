import React from "react";
import Zerodha from "../assets/zerodha-logo.png";
import Streak from "../assets/streak-logo.png";

const Navbar = () => {
  return (
    <div className="bg-white flex items-center jstify-start gap-4 p-2">
      <img src={Zerodha} className="w-[20%] h-[20%] md:h-[8%] md:w-[8%]" />
      <img src={Streak} className="w-[20%] h-[20%] md:h-[8%] md:w-[8%]" />
    </div>
  );
};

export default Navbar;