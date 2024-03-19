import React from "react";
import { useDashboardContext } from "../DashboardPage/DashboardPage";

const SmallSidebar = () => {
  const data = useDashboardContext();
  console.log(data);
  return <div>SmallSidebar</div>;
};

export default SmallSidebar;
