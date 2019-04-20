import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminDashboard from "./AdminComponents/AdminDashboard";
import StudentDashboard from "./StudentComponents/StudentDashboard";
import Login from "./CommonComponents/Login";
import Signup from "./CommonComponents/Signup";
import NotFound from "./CommonComponents/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/student" component={StudentDashboard} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
