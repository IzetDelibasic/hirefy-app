import React from "react";
import day from "dayjs";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import JobInfo from "../JobInfo/JobInfo";
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
  const date = day(createdAt).format("MMM Do, YYYY");
  return (
    <div className="bg-blue-400 m-3 lg:w-[80%] w-[80%] px-10 py-2 font-montserrat text-center mx-auto rounded-md shadow-md">
      <div>{company.charAt(0)}</div>
      <div className="font-medium">
        {position} at {company}
      </div>
      <div>Location: {jobLocation}</div>
      <div>Type: {jobType}</div>
      <div>
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt />} text={date} />
        <JobInfo icon={<FaBriefcase />} text={jobType} />
        <div className={`status ${jobStatus}`}>{jobStatus}</div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-[60%] mx-auto">
        <Link
          to={`../edit-job/${_id}`}
          className="bg-white p-2 mb-2 lg:mb-0 lg:mr-2"
        >
          Edit
        </Link>
        <Form method="post" action={`../delete-job/${_id}`}>
          <button type="submit" className="bg-white p-2">
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Job;
