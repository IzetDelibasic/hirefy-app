import React, { createContext, useContext, useState, useEffect } from "react";
import { Navbar, Sidebar } from "..";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { checkDefaultTheme } from "../../App";
import customFetch from "../../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const DashboardPage = () => {
  const data = useLoaderData();
  console.log(data);
  const user = { name: "Izet" };
  const [showSmallSidebar, setShowSmallSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

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
