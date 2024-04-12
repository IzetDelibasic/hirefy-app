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
    <div className="bg-blue-400 m-3 lg:w-[15%] w-[80%] px-10 py-2 font-montserrat text-center">
      <h1>
        {position} at {company.charAt(0).toUpperCase() + company.slice(1)}
      </h1>
      <p>Location: {jobLocation}</p>
      <p>Type: {jobType}</p>
      <div>
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt />} text={date} />
        <JobInfo icon={<FaBriefcase />} text={jobType} />
        <div className={`status ${jobStatus}`}>{jobStatus}</div>
      </div>
      <div>
        <Link className="bg-white">Edit</Link>
        <Form>
          <button type="submit" className="bg-white">
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Job;
