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
      <div>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboarContext = () => useContext(DashboardContext);
export default DashboardPage;
