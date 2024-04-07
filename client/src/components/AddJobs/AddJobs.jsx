import React from "react";
import FormRow from "../FomRow/FormRow";
import { useDashboardContext } from "../DashboardPage/DashboardPage";
import { useOutletContext } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../../utils/serverConstants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { FormRowSelect } from "..";

const AddJobs = () => {
  const { user } = useDashboardContext();
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  if (!user) {
    return <div>User is loading.</div>;
  }

  return (
    <div>
      <Form method="post" className="bg-gray-100">
        <div>Add jobs</div>
        <div>
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="jobLocation"
            name="jobLocation"
            defaultValue={user.location}
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
          <button className="bg-blue-600">Submit</button>
        </div>
      </Form>
    </div>
  );
};

export default AddJobs;
