// -React-
import React from "react";
import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";
// -Utils-
import customFetch from "../../utils/customFetch";
// -Components-
import StatItem from "../StatItem/StatItem";
// -Icons-
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="font-montserrat lg:text-[2rem] text-[1.4rem] mb-4">
        Application stats
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-[90%]">
        <StatItem
          title="Current users:"
          count={users}
          Icon={FaSuitcaseRolling}
        />
        <StatItem title="Current jobs:" count={jobs} Icon={FaCalendarCheck} />
      </div>
    </div>
  );
};

export default Admin;
