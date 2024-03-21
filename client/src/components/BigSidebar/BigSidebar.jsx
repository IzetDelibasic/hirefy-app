import React from "react";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import LinksConstant from "../../constants/LinksConstant";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

const BigSidebar = () => {
  const { showSmallSidebar, toggleSmallSidebar } = useDashboardContext();

  return (
    <div
      className={`${
        showSmallSidebar ? "block" : "hidden"
      } fixed inset-0 bg-black bg-opacity-20 z-50`}
    >
      <div className="fixed inset-y-0 left-0 w-64 bg-white z-50 overflow-y-auto">
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300 h-[4rem]">
          <h2 className="text-lg font-medium font-montserrat">Hirefy</h2>
          <button className="" onClick={toggleSmallSidebar}>
            <MdClose />
          </button>
        </div>
        <div className="mt-6">
          <div className="space-y-2">
            {LinksConstant.map((link) => {
              const { text, path, icon: Icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="flex justify-start items-center text-[1.2rem] ml-[1rem]"
                >
                  <Icon className="mr-[1rem]" />
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSidebar;
