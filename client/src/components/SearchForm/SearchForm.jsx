// -React-
import React, { useState } from "react";
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

const SearchForm = ({ setSearchValues }) => {
  const [formValues, setFormValues] = useState({
    search: "a",
    jobStatus: "all",
    jobType: "all",
    Sort: "newest",
  });

  const handleChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    setSearchValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Form className="flex flex-col items-center bg-blue-400 bg-opacity-80 w-[70%] mx-auto my-4 rounded-lg font-montserrat p-4 shadow-lg">
        <div className="font-normal text-[24px]">Search form</div>
        <div className="flex flex-col justify-start items-start md:flex-row w-[90%]">
          <FormRow
            type="search"
            name="search"
            defaultValue="a"
            onChange={handleChange}
          />
          <FormRowSelect
            labelText="Job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue="all"
            onChange={handleChange}
          />
          <FormRowSelect
            labelText="Job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
            onChange={handleChange}
          />
          <FormRowSelect
            name="Sort"
            defaultValue="newest"
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={handleChange}
          />
        </div>
        <Link
          to="/dashboard/jobs-page"
          className="bg-gray-900 text-white hover:bg-sky-300 hover:text-black ease-in-out duration-300 rounded-2xl px-[4rem] py-2 my-2 md:my-0 md:mr-2"
        >
          Reset
        </Link>
      </Form>
    </div>
  );
};

export default SearchForm;
