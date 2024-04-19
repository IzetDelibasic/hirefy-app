// -React-
import React from "react";
// -Components-
import StatItem from "../StatItem/StatItem";
// -Icons-
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "Pending applications:",
      count: defaultStats?.pending || 0,
      Icon: FaSuitcaseRolling,
    },
    {
      title: "Interviews scheduled:",
      count: defaultStats?.interview || 0,
      Icon: FaCalendarCheck,
    },
    {
      title: "Jobs declined:",
      count: defaultStats?.declined || 0,
      Icon: FaBug,
    },
  ];
  return (
    <div className="flex w-[90%] mx-auto">
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </div>
  );
};

export default StatsContainer;
