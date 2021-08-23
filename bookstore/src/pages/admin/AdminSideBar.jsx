import React from "react";
import { Link } from "react-router-dom";
import "./adminsidebar.scss";
export default function AdminSideBar() {
  return (
    <div className="col-2 ">
      <Link to="/admineditcategory" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark sidebar">
          {" "}
          Edit Categories
        </div>
      </Link>
      <div className="row p-3 text-white  bg-dark"> Edit Books</div>
      <Link to="/admineditpublisher" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark"> Edit Publisher</div>
      </Link>
      <div className="row p-3 text-white  bg-dark"> Edit Authors</div>
      <div className="row p-3 text-white  bg-dark"> Edit Users</div>
      <Link to="/admineditcustomer" style={{ textDecoration: "none" }}>
        <div className="row p-3 text-white  bg-dark"> Edit Customers</div>
      </Link>
    </div>
  );
}
