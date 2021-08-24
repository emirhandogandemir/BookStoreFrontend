import React from "react";
import { Route, Switch } from "react-router";
import EditCategory from "../Edit/EditCategory";
import EditCustomer from "../Edit/EditCustomer";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

export default function AdminPage() {
  const [bookCount, setBookCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  return (
    <div className="container-fluid">
      <p className="fs-3"> Admin Paneli</p>
      <hr />
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9">
          <div className="row">
            <div className="col-3">
              <div class="card text-dark bg-info" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">User Count</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-dark bg-info" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Book Count</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-dark bg-info" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Category Count</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-dark bg-info" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Customer Count</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
