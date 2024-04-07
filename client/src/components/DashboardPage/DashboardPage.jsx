import React, { createContext, useContext, useState, useEffect } from "react";
import { Navbar, Sidebar } from "..";
import { Outlet, useNavigate } from "react-router-dom";
import { checkDefaultTheme } from "../../App";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

const DashboardContext = createContext();

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [showSmallSidebar, setShowSmallSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await customFetch.get("/users/current-user");
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching current user data:", error);
      }
    };

    getCurrentUser();
  }, []);

  const toggleSmallSidebar = () => {
    setShowSmallSidebar(!showSmallSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/users/logout");
    toast.success("Logged out successfully");
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
          <Outlet context={{ user }} />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardPage;
