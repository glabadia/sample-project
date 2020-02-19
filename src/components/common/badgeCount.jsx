import React from "react";

const BadgeCount = ({ count }) => {
  return <span className="badge badge-warning badge-primary">{count}</span>;
};

export default BadgeCount;
