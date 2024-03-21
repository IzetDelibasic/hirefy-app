import React from "react";
import { MdClose } from "react-icons/md";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import NavLinks from "../NavLinks/NavLinks";

const SmallSidebar = () => {
  const { showSmallSidebar, toggleSmallSidebar } = useDashboardContext();

  return (
    <div
      className={`${
        showSmallSidebar ? "block" : "hidden"
      } fixed inset-0 bg-black bg-opacity-80 z-50`}
    >
      <div className="fixed inset-y-0 left-0 w-64 bg-white z-50 overflow-y-auto">
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300 h-[4rem]">
          <h2 className="text-lg font-medium font-montserrat">Hirefy</h2>
          <button className="lg:hidden" onClick={toggleSmallSidebar}>
            <MdClose />
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  );
};

export default SmallSidebar;
