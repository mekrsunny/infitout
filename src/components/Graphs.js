import React from "react";
import Summary from "./Summary";
import SupportResistance from "./SupportResistance";
import MovingAverages from "./MovingAverages";
import Oscillators from "./Oscillators";

const Graphs = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5">
      <Summary />
      <SupportResistance />
      <MovingAverages />
      <Oscillators />
    </div>
  );
};

export default Graphs;
