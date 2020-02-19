import React, { Component } from "react";
import Table from "./common/table";
import Modal from "./common/modal";
import EmployeeInfo from "./employeeInfo";

class Employees extends Component {
  columns = [
    {
      key: "info",
      content: employee => (
        <button
          onClick={() => this.handleEmployee(employee)}
          className="btn btn-sm btn-success"
        >
          Info
        </button>
      )
    },
    { path: "first_name", label: "First Name" },
    { path: "last_name", label: "Last Name" },
    { path: "email", label: "Email Address" },
    { path: "address", label: "Address" },
    { path: "contact_number", label: "Contact #" },
    {
      key: "delete",
      content: employee => (
        <button
          onClick={() => this.props.onDelete(employee)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      )
    }
  ];

  handleEmployee = employee => {
    console.log(employee);
    return <Modal show={true} content={<EmployeeInfo data={employee} />} />;
  };

  render() {
    const { columns } = this;
    const { employees, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={columns}
        data={employees}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default Employees;
