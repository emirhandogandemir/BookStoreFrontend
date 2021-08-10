import React from "react";
import HomePage from "../homepage/HomePage";
import { Route } from "react-router";
import Login from "../login/Login";
export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  );
}
