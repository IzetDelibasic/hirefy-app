import React from "react";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import LinksConstant from "../../constants/LinksConstant";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSmallSidebar, user } = useDashboardContext();
  return (
    <div className="mt-6">
      <div className="space-y-2">
        {LinksConstant.map((link) => {
          const { text, path, icon: Icon } = link;
          return (
            <NavLink
              to={path}
              key={text}
              onClick={isBigSidebar ? null : toggleSmallSidebar}
              className="flex justify-start items-center text-[1.2rem] ml-[1rem]"
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
