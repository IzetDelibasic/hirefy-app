// -React-
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, useNavigate } from "react-router-dom";
// -Components-
import FormRow from "../FomRow/FormRow";
import { FormRowSelect } from "..";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
// -Utils-
import { JOB_STATUS, JOB_TYPE } from "../../../../utils/serverConstants";
import customFetch from "../../utils/customFetch";

const AddJobs = () => {
  const { user } = useDashboardContext();
  const navigate = useNavigate();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobStatus, setJobStatus] = useState(JOB_STATUS.PENDING);
  const [jobType, setJobType] = useState(JOB_TYPE.FULL_TIME);
  const [formValid, setFormValid] = useState(false);

  if (!user) {
    return <div>User is loading.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "position":
        setPosition(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "jobLocation":
        setJobLocation(value);
        break;
      case "jobStatus":
        setJobStatus(value);
        break;
      case "jobType":
        setJobType(value);
        break;
      default:
        break;
    }
    setFormValid(
      position.trim() !== "" &&
        company.trim() !== "" &&
        jobLocation.trim() !== " &&"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        position: position,
        company: company,
        jobLocation: jobLocation,
        jobStatus: jobStatus,
        jobType: jobType,
      };
      await customFetch.post("/jobs", jobData).then(() => {
        toast.success("Job added successfully");
        navigate("/dashboard/jobs-page");
      });
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <Form
      method="post"
      className="bg-gray-100 flex flex-col items-center justify-center p-10 mx-auto w-[80%] md:mt-[12rem] mt-[6rem] rounded-[0.6rem] shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="text-[24px] font-montserrat">Add jobs</div>
      <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center">
        <FormRow type="text" name="position" onChange={handleInputChange} />
        <FormRow type="text" name="company" onChange={handleInputChange} />
        <FormRow
          type="text"
          labelText="Job Location"
          name="jobLocation"
          onChange={handleInputChange}
        />
        <FormRowSelect
          labelText="Job Status"
          name="jobStatus"
          defaultValue={JOB_STATUS.PENDING}
          list={Object.values(JOB_STATUS)}
        />
        <FormRowSelect
          labelText="Job Type"
          name="jobType"
          defaultValue={JOB_TYPE.FULL_TIME}
          list={Object.values(JOB_TYPE)}
        />
        <button
          className={`w-[60%] relative bg-blue-500 text-white font-medium py-[0.5rem] mr-0 my-[20px] md:mb-0 rounded-[3rem] group overflow-hidden z-[1] ${
            !formValid && "opacity-50 cursor-not-allowed"
          }`}
          type="submit"
          disabled={!formValid}
        >
          <div className="">Add job</div>
          <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
        </button>
      </div>
    </Form>
  );
};

export default AddJobs;
