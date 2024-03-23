import React, { createContext, useContext, useState } from "react";
import { Navbar, Sidebar } from "..";
import { Outlet } from "react-router-dom";

const DashboardContext = createContext();

const DashboardPage = ({ isDarkThemeEnabled }) => {
  const user = { name: "Izet" };
  const [showSmallSidebar, setShowSmallSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleSmallSidebar = () => {
    setShowSmallSidebar(!showSmallSidebar);
  };

  const logoutUser = async () => {
    console.log("Logout user!");
  };

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        toggleSmallSidebar,
        showSmallSidebar,
        logoutUser,
        toggleDarkTheme,
        isDarkTheme,
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
