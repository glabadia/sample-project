import React from "react";
import "./App.css";
import Pagination from "./components/common/pagination";
import paginate from "./utils/paginate";
import Employees from "./components/employees";
import ListGroup from "./components/common/listGroup";
import { getEmployees, getWorkStatus } from "./services/employee_data";
import _ from "lodash";
import NavBar from "./components/navbar";

class App extends React.Component {
  state = {
    employees: [],
    workStatus: [],
    pageSize: 10,
    currentPage: 1,
    loading: false,
    sortColumn: { path: "first_name", order: "asc" }
  };

  componentDidMount() {
    const workStatus = [{ name: "All Employees", _id: "" }, ...getWorkStatus()];
    this.setState({ loading: true });
    this.setState({ employees: getEmployees(), workStatus });
    this.setState({ loading: false });
  }

  handleDelete = customer => {
    const employees = this.state.employees.filter(e => e !== customer);
    this.setState({ employees });
  };

  handlePageChange = page => {
    if (!isNaN(page)) this.setState({ currentPage: page });
  };

  handleFilterStatus = work => {
    const { employees } = this.state;
    const filteredEmployees =
      work && work._id
        ? employees.filter(
            employee => employee.membership_status._id === work._id
          )
        : employees;
    // console.log(filteredEmployees.length);

    return filteredEmployees;
  };

  handleFilterChange = filter => {
    if (filter !== this.state.selectedFilter) {
      this.setState({ currentPage: 1 });
    }
    this.setState({ selectedFilter: filter });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  renderLoader = () => {
    return (
      <div className="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };

  getPagedData() {
    const {
      employees,
      pageSize,
      currentPage,
      selectedFilter,
      sortColumn
    } = this.state;

    const filteredContent =
      selectedFilter && selectedFilter._id
        ? employees.filter(
            employee => employee.membership_status._id === selectedFilter._id
          )
        : employees;
    const sorted = _.orderBy(
      filteredContent,
      [sortColumn.path],
      [sortColumn.order]
    );
    const pagedEmployees = paginate(sorted, currentPage, pageSize);
    return { pagedEmployees, totalCount: filteredContent.length };
  }

  render() {
    const {
      pageSize,
      currentPage,
      workStatus,
      selectedFilter,
      sortColumn
    } = this.state;

    const { pagedEmployees, totalCount } = this.getPagedData();

    return (
      <main className="container">
        <div className="row">
          <div className="col-2.5">
            <ListGroup
              itemList={workStatus}
              getBadgeCount={this.handleFilterStatus}
              onItemChange={this.handleFilterChange}
              selectedFilter={selectedFilter}
            />
          </div>
          <div className="col">
            <Employees
              employees={pagedEmployees}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
