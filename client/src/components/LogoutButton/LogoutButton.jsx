import React, { useState } from "react";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

const LogoutButton = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <div className="flex flex-row">
      <div
        type="button"
        className="bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white flex items-center justify-between w-[5rem] p-2 cursor-pointer rounded-[20px]"
        onClick={() => setShowLogout((prevState) => !prevState)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown className={showLogout ? "rotate-[-90deg]" : ""} />
      </div>
      <div className={showLogout ? "flex" : "hidden"}>
        <div
          onClick={logoutUser}
          className="bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white flex justify-center items-center p-2 w-[5rem] ml-2 cursor-pointer rounded-[20px]"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default LogoutButton;
