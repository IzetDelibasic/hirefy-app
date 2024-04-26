// -React-
import React from "react";
// -Components-
import Job from "../Job/Job";
import { useAllJobsContext } from "../JobsPage/JobsPage";
import PageButtonContainer from "../PageButtonContainer/PageButtonContainer";

const JobsContainer = () => {
  const data = useAllJobsContext();

  if (!data) {
    return <div>Loading data...</div>;
  }

  const { jobs, totalJobs, numOfPages } = data;

  if (jobs.length === 0) {
    return <div>No jobs available.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-montserrat">
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h1>

      <div className="flex lg:grid lg:grid-cols-3 flex-col justify-center items-center">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageButtonContainer />}
    </div>
  );
};

export default JobsContainer;
