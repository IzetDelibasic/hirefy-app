import React from "react";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import NavLinks from "../NavLinks/NavLinks";
import { MdClose } from "react-icons/md";

const BigSidebar = () => {
  const { showSmallSidebar, toggleSmallSidebar } = useDashboardContext();

  return (
    <div
      className={`${
        showSmallSidebar ? "block" : "hidden"
      } fixed inset-0  bg-opacity-20 z-50`}
    >
      <div className="fixed inset-y-0 left-0 w-64 bg-white hover:bg-blue-100 z-50 overflow-y-auto border-gray-300 border-r-[1px] ease-in-out duration-300">
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300 h-[4rem] group hover:bg-blue-500 duration-300 ease-in-out">
          <h2 className="text-lg font-medium font-montserrat uppercase pl-4 group-hover:text-white">
            Hirefy
          </h2>
          <button
            className="hover:text-white ease-in-out duration-300"
            onClick={toggleSmallSidebar}
          >
            <MdClose />
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  );
};

export default BigSidebar;
