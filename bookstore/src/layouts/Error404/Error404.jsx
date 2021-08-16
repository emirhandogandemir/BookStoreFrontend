import React from "react";
import "./error.scss";
export default function Error404() {
  return (
    <div className="container-fluid errorPage">
      <div className="text-danger bg-dark">
        {" "}
        <h3>404 NOT FOUND ERROR</h3>{" "}
      </div>
    </div>
  );
}
