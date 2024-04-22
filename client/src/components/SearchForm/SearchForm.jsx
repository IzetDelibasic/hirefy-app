// -React-
import React from "react";
import { Link, Form } from "react-router-dom";
// -Utils-
import {
  JOB_STATUS,
  JOB_TYPE,
  JOB_SORT_BY,
} from "../../../../utils/serverConstants";
// -Components-
import FormRow from "../FomRow/FormRow";
import FormRowSelect from "../FormRowSelect/FormRowSelect";
// -Context-
import { useAllJobsContext } from "../JobsPage/JobsPage";

const SearchForm = () => {
  const { searchValues } = useAllJobsContext();

  return (
    <div>
      <Form className="flex flex-col items-center bg-blue-400 bg-opacity-80 w-[70%] mx-auto my-4 rounded-lg font-montserrat p-4 shadow-lg">
        <div className="font-normal text-[24px]">Search form</div>
        <div className="flex flex-col justify-start items-start md:flex-row w-[90%]">
          <FormRow type="search" name="search" defaultValue="a" />
          <FormRowSelect
            labelText="Job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue="all"
          />
          <FormRowSelect
            labelText="Job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
          />
          <FormRowSelect
            name="Sort"
            defaultValue="newest"
            list={[...Object.values(JOB_SORT_BY)]}
          />
        </div>
        <Link
          to="/dashboard/jobs-page"
          className="bg-gray-900 text-white hover:bg-sky-300 hover:text-black ease-in-out duration-300 rounded-2xl px-[4rem] py-2 "
        >
          Reset
        </Link>
      </Form>
    </div>
  );
};

export default SearchForm;
