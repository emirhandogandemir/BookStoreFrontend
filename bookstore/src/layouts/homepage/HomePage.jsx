import React, { useState, useEffect } from "react";
import "./homePage.scss";
import BookList from "../../pages/BookList";
import { useLocation } from "react-router";
import { useUser } from "../../context/UserContext";
import Cart from "../cart/Cart";

import UserService from "../../services/userService";
import { act } from "react-dom/test-utils";
function HomePage() {
  const location = useLocation();

  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    UserService.getByUsername(localStorageUsername()).then((result) =>
      setActiveUser(result.data)
    );
    //.then(console.log(activeUser.id));
    //.then(localStorage.setItem("user", Json.stringify(activeUser)));
  }, []);
  console.log(activeUser);
  console.log(localStorageUsername() + ": localStorageUsername");

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="header-homepage">
              The BookWorm Editors -- {activeUser.username}--
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

  function localStorageUsername() {
    return localStorage.getItem("username");
  }
}
export default React.memo(HomePage);
