import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import { logoImage } from "../../constants/ImagesConstant";
import { LogOutButton, ThemeButton } from "..";

const Navbar = () => {
  const { toggleSmallSidebar, logoutUser } = useDashboardContext();

  return (
    <div className="h-[4rem] flex justify-center bg-white border-b-[1px] border-gray-300">
      <div className="w-[90%] flex items-center justify-between mx-auto">
        <FaAlignLeft
          className="text-blue-500 cursor-pointer"
          onClick={toggleSmallSidebar}
        />
        <div className="flex items-center justify-center cursor-default">
          <img src={logoImage} alt="Logo" className="w-[32px] h-[32px]" />
          <div className="text-3xl font-montserrat text-blue-500">irefy</div>
        </div>
        <ThemeButton />
        <div className="">
          <LogOutButton logoutUser={logoutUser} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
