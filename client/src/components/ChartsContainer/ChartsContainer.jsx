// -React-
import React, { useState } from "react";
// -Components-
import AreaChart from "../AreaChart/AreaChart";
import BarChart from "../BarChart/BarChart";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(false);
  return (
    <div>
      <div>Monthly Applications</div>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      <div></div>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
};

export default ChartsContainer;
