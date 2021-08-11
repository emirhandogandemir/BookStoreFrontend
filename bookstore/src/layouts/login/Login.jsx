import React from "react";
import "./login.scss";
import { useFormik } from "formik";
import validation from "./validation";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validation,
  });

  return (
    <div style={{ height: "600px" }}>
      <div className="loginBody">
        <div className="loginBody__child">
          <form onSubmit={formik.handleSubmit}>
            <label className="labelLogin" htmlFor="email">
              Email
            </label>{" "}
            <input
              className="inputLogin"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.email && (
              <div className="errorLogin">{formik.errors.email}</div>
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
            <button className="buttonLogin" type="submit">
              Login
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
