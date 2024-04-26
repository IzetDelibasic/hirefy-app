// -React-
import React from "react";
// -Icons-
import { FaAlignLeft } from "react-icons/fa";
// -Context-
import { useDashboardContext } from "../DashboardPage/DashboardPage";
// -Constants-
// import { logoImage } from "../../constants/ImagesConstant";
// -Components-
import { LogOutButton, ThemeButton } from "..";

const Navbar = () => {
  const { toggleSmallSidebar, logoutUser, isDarkTheme } = useDashboardContext();

  return (
    <div
      className={
        isDarkTheme
          ? "h-[4rem] flex justify-center bg-gray-800 border-b-[1px] border-gray-600"
          : "h-[4rem] flex justify-center bg-white border-b-[1px] border-gray-300"
      }
    >
      <div className="w-[90%] flex items-center justify-between mx-auto">
        <FaAlignLeft
          className="text-blue-500 cursor-pointer"
          onClick={toggleSmallSidebar}
        />
        <div className="flex items-center justify-center cursor-default">
          {/* <img src={logoImage} alt="Logo" className="w-[32px] h-[32px]" /> */}
          <div className="text-3xl font-montserrat text-blue-500">Hirefy</div>
        </div>
        <div className="w-[11rem] flex justify-between">
          <ThemeButton />
          <LogOutButton logoutUser={logoutUser} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
