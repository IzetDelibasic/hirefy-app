import React from "react";

const StatItem = ({ count, title, Icon }) => {
  return (
    <div>
      <div>{count}</div>
      <div>{title}</div>
      <div>
        <Icon />
      </div>
    </div>
  );
};

export default StatItem;
