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
  console.log(Job._id);
  return <div>Job</div>;
};

export default Job;
