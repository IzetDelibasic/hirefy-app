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
  const { defaultStats, monthlyApplicatons } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplicatons?.length > 0 && (
        <ChartsContainer data={monthlyApplicatons} />
      )}
    </>
  );
};

export default StatsPage;
