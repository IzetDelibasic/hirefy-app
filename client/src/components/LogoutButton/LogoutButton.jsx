// -React-
import React, { useState } from "react";
// -Icons-
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
// -Context-
import { useDashboardContext } from "../DashboardPage/DashboardPage";

const LogoutButton = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <div className="relative">
      <div
        type="button"
        className="bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white flex items-center justify-between w-[7.5rem] p-2 cursor-pointer rounded-[20px]"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user && user.avatar ? (
          <img
            src={user.avatar}
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
        ) : (
          <FaUserCircle className="" />
        )}
        {user && user.name}
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
            className="bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white flex justify-center items-center p-2 w-[7.5rem] mt-2 cursor-pointer rounded-[20px]"
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
