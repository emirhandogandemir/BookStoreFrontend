import React from "react";
import "./signUp.scss";
import { useFormik } from "formik";
import validation from "./validation";
export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validation,
  });

  return (
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
          <label className="labelLogin" htmlFor="firstName">
            firstName
          </label>{" "}
          <input
            className="inputLogin"
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          {formik.errors && formik.touched.firstName && (
            <div className="errorLogin">{formik.errors.firstName}</div>
          )}
          <label className="labelLogin" htmlFor="firstName">
            LastName
          </label>{" "}
          <input
            className="inputLogin"
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
          />
          {formik.errors && formik.touched.lastName && (
            <div className="errorLogin">{formik.errors.lastName}</div>
          )}
          <br />
          <button className="buttonLogin" type="submit">
            Sign Up
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
