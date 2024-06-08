import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../JobsPage/JobsPage";
import { checkDefaultTheme } from "../../App";
import { useState } from "react";

const PageBtnContainer = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);
  const { numOfPages, currentPage } = useAllJobsContext();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center font-montserrat my-10 md:w-[40%]">
      <button
        className={
          isDarkTheme
            ? "text-gray-200 flex flex-col justify-center items-center"
            : "text-gray-600 flex flex-col justify-center items-center"
        }
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        <div>Prev</div>
      </button>
      <div className="flex flex-row justify-between">
        {pages.map((pageNumber) => (
          <button
            className={
              isDarkTheme ? "text-gray-200 mx-2" : "text-gray-600 mx-2"
            }
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className={
          isDarkTheme
            ? "text-gray-200 flex flex-col justify-center items-center"
            : "text-gray-600 flex flex-col justify-center items-center"
        }
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        <HiChevronDoubleRight />
        <div>Next</div>
      </button>
    </div>
  );
};

export default PageBtnContainer;
