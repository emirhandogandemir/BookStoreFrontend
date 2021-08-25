import React, { useState, useEffect } from "react";
import { Route, Router, useHistory } from "react-router";
import Login from "../login/Login";
import "./homePage.scss";
import BookService from "../../services/bookService";
import Card from "../card/Card";
import BookList from "../../pages/BookList";
import { useLocation } from "react-router";
import { useUser } from "../../context/UserContext";
export default function HomePage() {
  const location = useLocation();
  const { user, setUser } = useUser();

  console.log(user);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="header-homepage">
              The BookWorm Editors -- {user} --
              <h3>Featured Books Of the September</h3>
              <button className="btn btn-dark btn-lg">See More</button>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src={"../../../assets/images/library.jpg"}
              alt="library"
              className="img-fluid img-thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="container cardDiv">
        <BookList></BookList>
      </div>
    </div>
  );
}
