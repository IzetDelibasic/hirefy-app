import React from "react";
import day from "dayjs";
import advencedFormat from "dayjs/plugin/advancedFormat";
day.extend(advencedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  createdAt,
  jobStatus,
  jobType,
}) => {
  return (
    <div>
      <p>{_id}</p>
      <h2>
        {position} at {company}
      </h2>
      <p>Location: {jobLocation}</p>
      <p>Type: {jobType}</p>
      <p>Status: {jobStatus}</p>
      <p>Created at: {createdAt}</p>
    </div>
  );
};

export default Job;
