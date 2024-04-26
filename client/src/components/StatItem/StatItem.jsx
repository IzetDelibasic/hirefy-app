import React from "react";

const StatItem = ({ count, title, Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[30%] w-[85%] bg-blue-500 h-[5rem] lg:h-[10rem] font-montserrat md:text-[22px] sm:text-[20px] lg:mr-2 lg:mb-0 mb-4 rounded-md shadow-xl">
      <Icon className="text-gray-100" />
      <div className="flex">
        <div className="font-normal mr-2">{title}</div>
        <div className="font-light">{count}</div>
      </div>
    </div>
  );
};

export default StatItem;
