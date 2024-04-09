import React, { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

const JobsPage = () => {
  const [data, setData] = useState(null);
  const AllJobsContext = createContext();

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const { data } = await customFetch.get("/jobs");
        console.log(data);
        setData(data);
      } catch (error) {
        toast.error(error?.response?.data?.msg);
      }
    };

    getAllJobs();
  }, []);

  return (
    <AllJobsContext.Provider value={data}>
      <div>JobsPage</div>
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default JobsPage;
