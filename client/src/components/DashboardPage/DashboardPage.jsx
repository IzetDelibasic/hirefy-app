import React, { createContext, useContext, useState } from "react";
import BigSidebar from "../BigSidebar/BigSidebar";
import Navbar from "../Navbar/Navbar";
import SmallSidebar from "../SmallSidebar/SmallSidebar";
import { Outlet } from "react-router-dom";

const DashboardContext = createContext();

const DashboardPage = () => {
  const user = { name: "Izet" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("Toggle dark theme.");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("Logout user!");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="hidden lg:block">
          <BigSidebar />
        </div>
        <div className="lg:hidden">
          <SmallSidebar />
        </div>
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="flex flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardPage;
