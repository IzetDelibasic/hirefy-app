import React, { createContext, useContext, useState } from "react";
import { Navbar, Sidebar } from "..";
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
        <Sidebar />
        <Navbar />
        <div className="flex ">
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardPage;
