import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./nav.scss";

import ThemeContext from "../../context/ThemeContext";
export default function Navi() {
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
              <NavLink to="/" activeClassName="navLink">
                Home
              </NavLink>
            </div>

            <div className=" col-sm-6 col-lg-3 p-3 navLink">
              <NavLink to="/categories" activeClassName="navLink">
                Categories
              </NavLink>
            </div>

            <div className=" col-sm-6 col-lg-3 p-3 navLink">
              <NavLink to="/blog" activeClassName="navLink">
                Blog
              </NavLink>
            </div>

            <div className=" col-sm-6 col-lg-3 p-3 navLink ">
              <NavLink to="/" activeClassName="navLink">
                İletişim
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 p-3 navLink">
              <NavLink to="/login" activeClassName="navLink">
                Login
              </NavLink>
            </div>
            <div className="col-sm-4 p-3 navLink">
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
