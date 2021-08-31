import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import EmailService from "../services/emailService";
export default function ContactPage() {
  const formik = useFormik({
    initialValues: {
      subject: "",
      body: "",
      phoneNumber: "",
    },
  });

  const onClick = () => {
    let emailService = new EmailService();
    emailService
      .send(formik.values)
      .then(
        (document.getElementById("buttonSuccess").innerHTML =
          "Email başarı ile gönderildi")
      )
      .catch(document.getElementById("buttonSuccess")).innerHTML =
      "Email gönderimi başarısız oldu";
  };

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-3"></div>
        <div className="col-6 ">
          {" "}
          <div className="">
            <h2>Email Send</h2>
            <div className="loginBody__child">
              <form onSubmit={formik.handleSubmit}>
                <label className="labelLogin" htmlFor="password">
                  PhoneNumber
                </label>{" "}
                <input
                  type="text"
                  className="inputLogin"
                  name="phoneNumber"
                  placeholder="telephoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                />
                {formik.errors && formik.touched.phoneNumber && (
                  <div className="errorLogin">{formik.errors.phoneNumber}</div>
                )}
                <br />
                <label className="labelLogin" htmlFor="password">
                  FirstName - LastName
                </label>{" "}
                <input
                  className="inputLogin"
                  type="text"
                  name="subject"
                  placeholder="firstName -LastName"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  onBlur={formik.handleBlur}
                />
                {formik.errors && formik.touched.subject && (
                  <div className="errorLogin">{formik.errors.subject}</div>
                )}
                <label className="labelLogin" htmlFor="password">
                  Content
                </label>{" "}
                <input
                  className="inputLogin"
                  type="text"
                  name="body"
                  onChange={formik.handleChange}
                  placeholder="content"
                  value={formik.values.body}
                  onBlur={formik.handleBlur}
                />
                {formik.errors && formik.touched.body && (
                  <div className="errorLogin">{formik.errors.body}</div>
                )}
                <br />
                <button className="buttonLogin" type="submit" onClick={onClick}>
                  Send Email Us
                </button>
                <h2 id="buttonSuccess"> </h2>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
