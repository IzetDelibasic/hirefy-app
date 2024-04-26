// -React-
import React from "react";
import { useLoaderData } from "react-router-dom";
// -Components-
import { ChartsContainer, StatsContainer } from "..";
// -Utils-
import customFetch from "../../utils/customFetch";

export const loader = async () => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};

const StatsPage = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  return (
    <div className="lg:mt-20">
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </div>
  );
};

export default StatsPage;
