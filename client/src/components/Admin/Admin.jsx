// -React-
import React from "react";
import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";
// -Utils-
import customFetch from "../../utils/customFetch";

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
  return <div>Admin Page</div>;
};

export default Admin;
