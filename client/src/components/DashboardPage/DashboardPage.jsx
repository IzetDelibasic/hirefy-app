import React, { createContext, useContext, useState } from "react";
import { Navbar, BigSidebar, SmallSidebar } from "..";
import { Outlet } from "react-router-dom";

const DashboardContext = createContext();

const DashboardPage = () => {
  const user = { name: "Izet" };
  const [showSmallSidebar, setShowSmallSidebar] = useState(false);

  const toggleSmallSidebar = () => {
    setShowSmallSidebar(!showSmallSidebar);
  };

  const logoutUser = async () => {
    console.log("Logout user!");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        toggleSmallSidebar,
        showSmallSidebar,
        logoutUser,
      }}
    >
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="hidden lg:block">
          <BigSidebar />
        </div>
        <div>
          <div className="lg:hidden">
            <SmallSidebar />
          </div>
        </div>
        <Navbar />
        <div className="flex flex-grow">
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardPage;
