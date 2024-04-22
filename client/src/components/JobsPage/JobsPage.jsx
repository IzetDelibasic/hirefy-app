// -React-
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// -Utils-
import customFetch from "../../utils/customFetch";
// -Components-
import JobsContainer from "../JobsContainer/JobsContainer";
import SearchForm from "../SearchForm/SearchForm";

const AllJobsContext = createContext();

const JobsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loader = async () => {
    try {
      const params = new URL(window.location.href).searchParams;
      const { data } = await customFetch.get("/jobs", {
        params: Object.fromEntries(params),
      });

      setData(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.msg);
      setLoading(false);
    }
  };

  useEffect(() => {
    loader();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AllJobsContext.Provider value={data}>
      <SearchForm />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default JobsPage;
