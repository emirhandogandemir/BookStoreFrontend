import React from "react";
import { Route, Router, useHistory } from "react-router";
import Login from "../login/Login";

export default function HomePage() {
  let history = useHistory("/");
  return (
    <div style={{ backgroundColor: "gray" }}>
      Home
      <Route exact path="/login" component={Login}></Route>
    </div>
  );
}
