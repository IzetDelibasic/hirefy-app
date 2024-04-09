import React from "react";
import Job from "../Job/Job";
import { useAllJobsContext } from "../JobsPage/JobsPage";

const JobsContainer = () => {
  const { data } = useAllJobsContext();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { jobs } = data;

  if (jobs.length === 0) {
    return <div>No jobs available.</div>;
  }

  return (
    <div>
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />;
      })}
    </div>
  );
};

export default JobsContainer;
