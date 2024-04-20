// -React-
import React from "react";
// -Components-
import Job from "../Job/Job";
import { useAllJobsContext } from "../JobsPage/JobsPage";

const JobsContainer = () => {
  const data = useAllJobsContext();

  if (!data) {
    return <div>Loading data...</div>;
  }

  const { jobs } = data;

  if (jobs.length === 0) {
    return <div>No jobs available.</div>;
  }

  return (
    <div className="flex lg:grid lg:grid-cols-3 flex-col justify-center items-center">
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />;
      })}
    </div>
  );
};

export default JobsContainer;
