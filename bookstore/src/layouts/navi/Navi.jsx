import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./nav.scss";

import ThemeContext from "../../context/ThemeContext";
export default function Navi(props) {
  //const data = useContext(ThemeContext);

  //console.log(data);
  return (
    <nav className="container-fluid p-3">
      <p>Can We help you ? + 554389768</p>

      <hr />
      <div className="row">
        <div className="col-sm-4">
          <NavLink to="/">
            <img
              src={"../../../assets/images/bookstore.jpg"}
              alt="bookstore"
              className="img-fluid img-thumbnail imageNav"
            />
          </NavLink>
        </div>

        <div className="col-sm-4">
          <div className="row">
            <div className=" col-sm-6 col-lg-3 p-3 navLink">
              <NavLink
                to="/"
                activeClassName="navLink"
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </div>

            <div className=" col-sm-6 col-lg-3 p-3 navLink">
              <NavLink
                to="/categories"
                activeClassName="navLink"
                style={{ textDecoration: "none", color: "black" }}
              >
                Categories
              </NavLink>
            </div>

            <div className=" col-sm-6 col-lg-3 p-3 navLink">
              <NavLink
                to="/blog"
                activeClassName="navLink"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blog
              </NavLink>
            </div>

            <div className=" col-sm-6 col-lg-3 p-3 navLink ">
              <NavLink
                to="/contact"
                activeClassName="navLink"
                style={{ textDecoration: "none", color: "black" }}
              >
                İletişim
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 p-3 navLink">
              <NavLink
                to="/login"
                activeClassName="navLink"
                style={{ textDecoration: "none" }}
              >
                <p className="text-dark"> Login</p>
              </NavLink>
            </div>
            <div className="col-sm-4 p-3 navLink">
              <NavLink
                to="/signUp"
                activeClassName="navLink"
                style={{ textDecoration: "none" }}
              >
                <p className="text-dark"> Sign Up</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
