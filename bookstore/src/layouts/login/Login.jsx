import React, { useState, useEffect } from "react";
import "./login.scss";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import validation from "./validation";
import UserService from "../../services/userService";
import jwt_decode from "jwt-decode";
import { useUser } from "../../context/UserContext";

export default function Login() {
  const history = useHistory();

  const [state, dispatch] = useUser();
  /**
   * TODO: Orhan was here :)
   *   - Orhan the real fixing
   *   - Orhan the hot fixing
   *   - Orhan the alfa fixing
   */

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validation,
  });

  const onClick = () => {
    UserService.login({
      username: formik.values.username,
      password: formik.values.password,
    })
      .then(redirect)
      .catch(() => {
        throw Error("error");
      });
  };

  function historyAdmin() {
    dispatch({ type: "SET_IS_ADMIN", payload: true });
    localStorage.setItem("isAdmin", true);
    localStorage.setItem("username", formik.values.username);
    dispatch({ type: "SET_USERNAME", payload: formik.values.username });
    history.push("/admin");
  }

  function historyUser() {
    dispatch({ type: "SET_USERNAME", payload: formik.values.username });
    localStorage.setItem("isAdmin", false);
    localStorage.setItem("username", formik.values.username);
    dispatch({ type: "SET_IS_ADMIN", payload: false });
    history.push("/");
  }

  const redirect = ({ data }) => {
    const roles = jwt_decode(data.token).roles.split(",");
    return roles.some((it) => it === "ROLE_ADMIN" || it === "ROLE_SUPER_ADMIN")
      ? historyAdmin()
      : historyUser();
  };
  //console.log(user.isAdmin);
  return (
    <div className="container loginBackground" style={{ height: "600px" }}>
      <div className="row m-5">
        <div className="col-3"></div>
        <div className="col-6 ">
          {" "}
          <div className="">
            <h2>Member Access</h2>
            <div className="loginBody__child">
              <form onSubmit={formik.handleSubmit}>
                <label className="labelLogin" htmlFor="text">
                  username
                </label>{" "}
                <input
                  className="inputLogin"
                  type="text"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                />
                {formik.errors && formik.touched.username && (
                  <div className="errorLogin">{formik.errors.username}</div>
                )}
                <label className="labelLogin" htmlFor="password">
                  Password
                </label>{" "}
                <input
                  className="inputLogin"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.errors && formik.touched.password && (
                  <div className="errorLogin">{formik.errors.password}</div>
                )}
                <br />
                <button className="buttonLogin" type="submit" onClick={onClick}>
                  Login
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
