import React from "react";
import { Route } from "react-router";
import Login from "../login/Login";

export default function HomePage() {
  return (
    <div>
      <Route exact path="/" component={HomePage}>
        {" "}
      </Route>
      <Route exact path="/login" component={Login}>
        {" "}
      </Route>
    </div>
  );
}
