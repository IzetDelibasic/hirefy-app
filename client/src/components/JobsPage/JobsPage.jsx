import React, { useEffect } from "react";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

const JobsPage = () => {
  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const { data } = await customFetch.get("/jobs");
        console.log(data);
        return data;
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
      }
    };

    getAllJobs();
  }, []);

  return <div>JobsPage</div>;
};

export default JobsPage;
