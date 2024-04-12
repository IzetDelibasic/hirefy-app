import React from "react";

const JobInfo = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default JobInfo;
