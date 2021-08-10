import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./nav.scss";
export default function Navi() {
  return (
    <nav className="nav" style={{ backgroundColor: "gray" }}>
      <div className="nav__image">
        <NavLink to="/">
          <img
            src={"../../../assets/images/bookstore.jpg"}
            alt="bookstore"
            className="nav__image__bookstore"
          />
        </NavLink>
      </div>

      <div className="nav">
        <div className="nav__content">
          <NavLink to="/" activeClassName="navi-router">
            Home
          </NavLink>
        </div>

        <div className="nav__content">
          <NavLink to="/" activeClassName="navi-router">
            Categories
          </NavLink>
        </div>

        <div className="nav__content">
          {" "}
          <NavLink to="/" activeClassName="navi-router">
            Blog
          </NavLink>
        </div>

        <div className="nav__content">
          {" "}
          <NavLink to="/" activeClassName="navi-router">
            İletişim
          </NavLink>
        </div>
      </div>
      <div className="nav__content">
        <NavLink to="/login" activeClassName="navi-router">
          Login
        </NavLink>
        <NavLink to="/signUp" activeClassName="navi-router">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
}
