import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "./App";

import About from "./components/about";
import Login from "./components/login";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import EmployeeInfo from "./components/employeeInfo";

const Main = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route component={EmployeeInfo} path="/employees/:id" />
        <Route component={Login} path="/login" />
        <Route component={About} path="/about" />
        <Route exact component={App} path="/" />
        <Route component={NotFound} path="/not-found" />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};

export default Main;
