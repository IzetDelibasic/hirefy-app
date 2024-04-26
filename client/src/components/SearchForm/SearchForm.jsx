// -React-
import React, { useState } from "react";
import { Link, Form } from "react-router-dom";
// -Utils-
import {
  JOB_STATUS,
  JOB_TYPE,
  JOB_SORT_BY,
} from "../../../../utils/serverConstants";
import customFetch from "../../utils/customFetch";
// -Components-
import FormRow from "../FomRow/FormRow";
import FormRowSelect from "../FormRowSelect/FormRowSelect";
import { toast } from "react-toastify";

const SearchForm = ({ setSearchValues }) => {
  const [formValues, setFormValues] = useState({
    search: "",
    jobStatus: "all",
    jobType: "all",
    Sort: "newest",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValues(formValues);
  };

  const resetJobFilters = async () => {
    try {
      const { data } = await customFetch.get("/jobs");
      window.location.reload();
      toast.success("Job filters reset");
      return { data };
    } catch (error) {
      toast.error("Problem with resetting job filters");
      return error;
    }
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-blue-400 bg-opacity-80 w-[70%] mx-auto my-4 rounded-lg font-montserrat p-4 shadow-lg"
      >
        <div className="font-normal text-[24px]">Search form</div>
        <div className="flex flex-col justify-start items-start md:flex-row w-[90%]">
          <FormRow
            type="search"
            name="search"
            value={formValues.search}
            onChange={handleChange}
          />
          <FormRowSelect
            labelText="Job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            value={formValues.jobStatus}
            onChange={handleChange}
          />
          <FormRowSelect
            labelText="Job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            value={formValues.jobType}
            onChange={handleChange}
          />
          <FormRowSelect
            name="Sort"
            value={formValues.Sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-900 text-white hover:bg-sky-300 hover:text-black ease-in-out duration-300 rounded-2xl px-[4rem] py-2 my-2 md:my-0 md:mr-2"
          >
            Search
          </button>
          <button
            onClick={resetJobFilters}
            className="bg-gray-900 text-white hover:bg-sky-300 hover:text-black ease-in-out duration-300 rounded-2xl px-[4rem] py-2 my-2 md:my-0 md:mr-2"
          >
            Reset
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
