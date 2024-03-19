import React from "react";
import { useDashboarContext } from "../DashboardPage/DashboardPage";

const SmallSidebar = () => {
  const data = useDashboarContext();
  console.log(data);
  return <div>SmallSidebar</div>;
};

export default SmallSidebar;
