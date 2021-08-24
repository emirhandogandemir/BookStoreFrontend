import React from "react";
import { Link } from "react-router-dom";
import "./adminsidebar.scss";
export default function AdminSideBar() {
  return (
    <div className="col-2 ">
      <div className="row p-3 text-dark  bg-primary">Edit List</div>
      <Link to="/admineditcategory" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark sidebar">
          {" "}
          Edit Categories
        </div>
      </Link>
      <Link to="/admineditbook" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark"> Edit Book</div>
      </Link>
      <Link to="/admineditpublisher" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark"> Edit Publisher</div>
      </Link>

      <Link to="/admineditauthor" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark"> Edit Author</div>
      </Link>
      <Link to="/adminedituser" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark"> Edit Users</div>
      </Link>
      <Link to="/admineditcustomer" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark"> Edit Customers</div>
      </Link>
    </div>
  );
}
