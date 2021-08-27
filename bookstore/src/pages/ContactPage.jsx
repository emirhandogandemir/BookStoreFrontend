import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function ContactPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-2">
          <a href="https://api.whatsapp.com/send?phone=905541393831">
            <img
              src={"../../../assets/images/whatsapp.png"}
              alt="whatsapp"
              className="img-fluid imageNav"
              style={{ maxHeight: "100px", maxWidth: "100px" }}
            />
          </a>
        </div>
        <div className="col-2">
          <a href="https://api.whatsapp.com/send?phone=905541393831">
            <img
              src={"../../../assets/images/gmail.png"}
              alt="whatsapp"
              className="img-fluid imageNav"
              style={{ maxHeight: "100px", maxWidth: "100px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
