import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import EditCategory from "../Edit/EditCategory";
import EditCustomer from "../Edit/EditCustomer";
import { Link } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import BookService from "../../services/bookService";
import AdminSideBar from "./AdminSideBar";
import UserService from "../../services/userService";
import CustomerService from "../../services/customerService";
import CategoryService from "../../services/categoryService";

export default function AdminPage() {
  const [bookCount, setBookCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    let bookService = new BookService();
    let customerService = new CustomerService();
    let categoryService = new CategoryService();
    UserService.countGetAll().then((result) => setUserCount(result.data));
    bookService.countGetAll().then((result) => setBookCount(result.data));
    customerService
      .countGetAll()
      .then((result) => setCustomerCount(result.data));
    categoryService
      .countGetAll()
      .then((result) => setCategoryCount(result.data));
  }, []);

  const data = {
    labels: ["Book Count", "User Count", "Customer Count", "Category Count"],
    datasets: [
      {
        label: "# of Votes",
        data: [bookCount, userCount, customerCount, categoryCount],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
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
                  <p class="card-text">{userCount}</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-dark bg-info" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Book Count</h5>
                  <p class="card-text">{bookCount}</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-dark bg-info" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Category Count</h5>
                  <p class="card-text">{categoryCount}</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-dark bg-info" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Customer Count</h5>
                  <p class="card-text">{customerCount}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-7">
              {" "}
              <div className="header">
                <h3 className="title">System statistics </h3>
              </div>
              <Bar data={data} options={options} />
            </div>
            <div className="col-1"></div>
            <div className="col-4">
              <Pie data={data} />
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
