// -React-
import React from "react";
// -Icons-
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// -Context-
import { useDashboardContext } from "../DashboardPage/DashboardPage";

const ThemeButton = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <div
      onClick={toggleDarkTheme}
      className={
        isDarkTheme
          ? "flex items-center justify-center bg-neutral-200 border-2 border-blue-600 p-2 rounded-[30px] w-[3rem]"
          : "flex items-center justify-center bg-neutral-300 border-2 border-blue-600 p-2 rounded-[30px] w-[3rem]"
      }
    >
      {isDarkTheme ? (
        <BsFillSunFill className="text-blue-800" />
      ) : (
        <BsFillMoonFill className="text-blue-600" />
      )}
    </div>
  );
};

export default ThemeButton;
