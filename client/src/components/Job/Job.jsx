// -React-
import React from "react";
import { toast } from "react-toastify";
import { Link, Form, redirect } from "react-router-dom";
// -Icons-
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
// -Components-
import JobInfo from "../JobInfo/JobInfo";
import customFetch from "../../utils/customFetch";
// -Dayjs-
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
  const date = day(createdAt).format("MMM Do, YYYY");

  const deleteJob = async (e) => {
    e.preventDefault();
    try {
      await customFetch.delete(`/jobs/${_id}`);
      toast.success("Job deleted successfully");
      return redirect("/dashboard/jobs-page");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <div className="bg-blue-400 m-2 lg:w-[90%] w-[80%] lg:h-[22rem] lg:px-10 lg:py-2 font-montserrat text-center mx-auto rounded-md shadow-md flex flex-col justify-center items-center">
      <div className="border-2 border-black w-[3rem] mx-auto h-[3rem] flex justify-center items-center font-bold bg-blue-200 bg-opacity-60 mt-4 lg:mt-0">
        {company.charAt(0)}
      </div>
      <div className="font-medium my-1">
        {position} at {company}
      </div>
      <div>
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt />} text={date} />
        <JobInfo icon={<FaBriefcase />} text={jobType} />
        <div className={`status ${jobStatus}`}>Status: {jobStatus}</div>
      </div>
      <div className="flex flex-row justify-center items-center w-[60%] mx-auto my-4">
        <Link
          to={`../edit-job/${_id}`}
          className="bg-gray-900 text-white p-2 mr-2 hover:bg-sky-300 hover:text-black ease-in-out duration-300 rounded-2xl w-[4rem]"
        >
          Edit
        </Link>
        <Form method="post" action={`../delete-job/${_id}`}>
          <button
            type="submit"
            onClick={deleteJob}
            className="bg-gray-900 text-white p-2 hover:bg-sky-300 hover:text-black ease-in-out duration-300 rounded-2xl w-[6rem]"
          >
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Job;
