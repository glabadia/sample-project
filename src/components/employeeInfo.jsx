import React from "react";

const EmployeeInfo = data => {
  return (
    <React.Fragment>
      <h1>Employee Info</h1>
      {Object.entries(data).forEach((key, value) => (
        <div>
          <strong>{key}</strong>
          <p>{value}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default EmployeeInfo;
