// - React-
import React from "react";
import { NavLink } from "react-router-dom";
// - Components -
import { useDashboardContext } from "../DashboardPage/DashboardPage";
// - Constants -
import LinksConstant from "../../constants/LinksConstant";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSmallSidebar, user } = useDashboardContext();
  return (
    <div className="mt-6">
      <div className="space-y-2">
        {LinksConstant.map((link) => {
          const { text, path, icon: Icon } = link;
          const role = user ? user.role : null;
          if (path === "admin" && role !== "admin") return;
          return (
            <NavLink
              to={path}
              key={text}
              onClick={isBigSidebar ? null : toggleSmallSidebar}
              className="flex justify-start items-center text-[1.25rem] ml-[1rem] group hover:text-blue-500 w-[80%] ease-in-out duration-300 font-about"
            >
              <Icon className="mr-[1rem]" />
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
