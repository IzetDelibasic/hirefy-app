// -React-
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// -Utils-
import customFetch from "../../utils/customFetch";
// -Components-
import JobsContainer from "../JobsContainer/JobsContainer";

const AllJobsContext = createContext();

const JobsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const { data } = await customFetch.get("/jobs");
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        setLoading(false);
      }
    };

    getAllJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AllJobsContext.Provider value={data}>
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default JobsPage;
