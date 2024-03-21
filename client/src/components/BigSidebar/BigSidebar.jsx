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
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-100 z-50 overflow-y-auto border-black border-r-[1px]">
        <div className="flex justify-between items-center px-4 py-2 bg-blue-500 border-b border-black h-[4rem] text-white">
          <h2 className="text-lg font-medium font-montserrat uppercase pl-4">
            Hirefy
          </h2>
          <button className="" onClick={toggleSmallSidebar}>
            <MdClose />
          </button>
        </div>
        <NavLinks isBigSidebar />
      </div>
    </div>
  );
};

export default BigSidebar;
