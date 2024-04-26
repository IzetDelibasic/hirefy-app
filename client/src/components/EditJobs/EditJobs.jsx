// -React-
import React from "react";
import { toast } from "react-toastify";
import { useNavigate, useLoaderData, Form, redirect } from "react-router-dom";
// -Components-
import FormRow from "../FomRow/FormRow";
import FormRowSelect from "../FormRowSelect/FormRowSelect";
// -Constants-
import { JOB_STATUS, JOB_TYPE } from "../../../../utils/serverConstants";
// -Utils-
import customFetch from "../../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/jobs-page");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Job updated successfully");
    useNavigate("/dashboard/jobs-page");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/jobs-page");
  }
};

const EditJobs = () => {
  const { job } = useLoaderData();

  return (
    <Form
      method="patch"
      className="bg-gray-100 flex flex-col items-center justify-center p-10 mx-auto w-[80%] md:mt-[12rem] mt-[6rem] rounded-[0.6rem] shadow-lg"
    >
      <div className="text-[24px] font-montserrat">Add jobs</div>
      <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center">
        <FormRow type="text" name="position" defaultValue={job.position} />
        <FormRow type="text" name="company" defaultValue={job.company} />
        <FormRow
          type="text"
          labelText="Job Location"
          name="jobLocation"
          defaultValue={job.jobLocation}
        />
        <FormRowSelect
          labelText="Job Status"
          name="jobStatus"
          defaultValue={job.jobStatus}
          list={Object.values(JOB_STATUS)}
        />
        <FormRowSelect
          labelText="Job Type"
          name="jobType"
          defaultValue={job.jobType}
          list={Object.values(JOB_TYPE)}
        />
        <button
          className="w-[60%] relative bg-blue-500 text-white font-medium py-[0.5rem] mr-0 my-[20px] md:mb-0 rounded-[3rem] group overflow-hidden z-[1]"
          type="submit"
        >
          <div className="">Add job</div>
          <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
        </button>
      </div>
    </Form>
  );
};

export default EditJobs;
