import React from "react";
import "./login.scss";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import validation from "./validation";
import UserService from "../../services/userService";
import jwt_decode from "jwt-decode";

export default function Login() {
  const history = useHistory();

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
        throw Error("Aklını alıyoreeee");
      });
  };

  const redirect = ({ data }) => {
    const roles = jwt_decode(data.token).roles.split(",");
    return roles.some((it) => it === "ROLE_ADMIN" || it === "ROLE_SUPER_ADMIN")
      ? history.push("/admin", { isAdmin: true })
      : history.push("/");
  };

  return (
    <div style={{ height: "600px" }}>
      <div className="loginBody">
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
  );
}
