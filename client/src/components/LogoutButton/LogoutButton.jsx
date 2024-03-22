import React, { useState } from "react";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

const LogoutButton = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <div className="relative">
      <div
        type="button"
        className="bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white flex items-center justify-between w-[5rem] p-2 cursor-pointer rounded-[20px]"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown
          className={
            showLogout
              ? "rotate-[-90deg] animation duration-500 ease-in-out"
              : "animation duration-500 ease-in-out"
          }
        />
      </div>
      {showLogout && (
        <div className="absolute rounded-[20px]">
          <div
            onClick={logoutUser}
            className="bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white flex justify-center items-center p-2 w-[5rem] mt-2 cursor-pointer rounded-[20px]"
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
