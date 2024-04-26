// -React-
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// -Utils-
import customFetch from "../../utils/customFetch";
// -Components-
import JobsContainer from "../JobsContainer/JobsContainer";
import SearchForm from "../SearchForm/SearchForm";

export const loader = async (searchValues) => {
  try {
    const { data } = await customFetch.get("/jobs", {
      params: searchValues,
    });
    return { data };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AllJobsContext = createContext();

const JobsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchValues, setSearchValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await loader(searchValues);
      if (result.data) {
        setData(result.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [searchValues]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AllJobsContext.Provider value={data}>
      <SearchForm setSearchValues={setSearchValues} />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default JobsPage;
