import React from "react";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useNavigate, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    useNavigate("/dashboard/jobs-page");
  }
};

export const action = async ({ params }) => {};

const EditJobs = () => {
  const { job } = useLoaderData();
  console.log(job);
  return <div>EditJobs</div>;
};

export default EditJobs;
