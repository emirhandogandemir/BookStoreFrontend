import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./nav.scss";
export default function Navi() {
  return (
    <nav className="container-fluid p-3">
      <p>Can We help you ? + 554389768</p>
      <hr />
      <div className="row">
        <div className="col-3">
          <NavLink to="/">
            <img
              src={"../../../assets/images/bookstore.jpg"}
              alt="bookstore"
              className="img-fluid  imageNav"
            />
          </NavLink>
        </div>

        <div className="col-5">
          <div className="row">
            <div className="col-3 p-3 navLink">
              <NavLink to="/" activeClassName="navLink">
                Home
              </NavLink>
            </div>

            <div className="col-3 p-3 navLink">
              <NavLink to="/" activeClassName="navLink">
                Categories
              </NavLink>
            </div>

            <div className="col-3 p-3 navLink">
              <NavLink to="/" activeClassName="navLink">
                Blog
              </NavLink>
            </div>

            <div className="col-3 p-3 navLink ">
              <NavLink to="/" activeClassName="navLink">
                İletişim
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-4 p-3 navLink">
              <NavLink to="/login" activeClassName="navLink">
                Login
              </NavLink>
            </div>
            <div className="col-4 p-3 navLink">
              <NavLink to="/signUp" activeClassName="navLink">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
