import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import { logoImage } from "../../constants/ImagesConstant";

const Navbar = () => {
  const { toggleSmallSidebar } = useDashboardContext();

  return (
    <div className="h-[4rem] flex justify-center bg-white border-b-[1px] border-gray-300">
      <div className="w-[90%] flex items-center justify-center mx-auto">
        <FaAlignLeft
          className="text-blue-500 cursor-pointer"
          onClick={toggleSmallSidebar}
        />
        <div className="flex items-center justify-center cursor-default mx-auto">
          <img src={logoImage} alt="Logo" className="w-[48px] h-[48px]" />
          <div className="text-3xl font-montserrat pl-[0.5rem] text-blue-500">
            Hirefy
          </div>
        </div>
        <div>Toggle/Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
