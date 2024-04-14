// -React-
import React from "react";

const JobInfo = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default JobInfo;
