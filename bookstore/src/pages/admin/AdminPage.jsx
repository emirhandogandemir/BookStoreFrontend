import React from "react";
import { Route, Switch } from "react-router";
import EditCategory from "../Edit/EditCategory";
import EditCustomer from "../Edit/EditCustomer";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

export default function AdminPage() {
  return (
    <div className="container-fluid">
      <p className="fs-3"> Admin Paneli</p>
      <hr />
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9 bg-danger">
          {/* <EditCategory></EditCategory>
          <EditCustomer></EditCustomer> */}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
