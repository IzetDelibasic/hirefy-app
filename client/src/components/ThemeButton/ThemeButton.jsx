import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../DashboardPage/DashboardPage";

const ThemeButton = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <div
      onClick={toggleDarkTheme}
      className="flex items-center justify-center bg-gray-100 border-2 border-blue-600 p-2 rounded-[30px] w-[3rem]"
    >
      {isDarkTheme ? (
        <BsFillMoonFill className="text-blue-800" />
      ) : (
        <BsFillSunFill className="text-blue-800" />
      )}
    </div>
  );
};

export default ThemeButton;
