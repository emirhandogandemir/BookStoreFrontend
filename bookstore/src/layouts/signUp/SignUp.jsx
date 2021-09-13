import React, { useState, useEffect } from "react";
import "./signUp.scss";
import { useFormik } from "formik";
import UserService from "../../services/userService";
import validation from "./validation";
import CardService from "../../services/cardService";

export default function SignUp() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // console.log(user);
    Object.keys(user).length > 0 && new CardService().add(user);
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
    },

    onSubmit: (values) => {
      register(values).then((_) => getFindTopByOrderByIdDesc());
    },
    validationSchema: validation,
  });

  return (
    <div className="container loginback">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6  mb-5">
          <div className="">
            <h2>Sign Up</h2>
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
                <label className="labelLogin" htmlFor="email">
                  Username
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
        </div>
      </div>
    </div>
  );

  function register(values) {
    return UserService.register(values).then("Kayıt Başarılı!");
  }

  function getFindTopByOrderByIdDesc() {
    return UserService.getFindTopByOrderByIdDesc().then((result) =>
      setUser({ user: { ...result.data } })
    );
  }
}
