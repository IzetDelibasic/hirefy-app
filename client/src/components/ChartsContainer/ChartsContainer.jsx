// -React-
import React, { useState } from "react";
// -Components-
import AreaChart from "../AreaChart/AreaChart";
import BarChart from "../BarChart/BarChart";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="font-montserrat">Monthly Applications</div>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        className="bg-gray-900 text-white hover:bg-sky-300 hover:text-black ease-in-out duration-300 rounded-2xl px-[4rem] py-2 my-2 md:my-0 md:mr-2"
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      <div></div>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
};

export default ChartsContainer;
