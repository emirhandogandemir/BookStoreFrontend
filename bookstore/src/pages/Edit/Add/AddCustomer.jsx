import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomerService from "../../../services/customerService";
export default function AddCustomer({ onSuccess }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      //  password:Yup.string().required("url boş bırakılamaz"),
      //  firstName:Yup.string().required("ad boş bırakılamaz"),
      // lastName:Yup.string().required("soyad boş bırakılamaz")
    }),
    onSubmit: (values) => {
      //console.log(values);
      let customerService = new CustomerService();
      customerService
        .add(values)
        .then("başarılı bir şekilde güncellendi")
        .catch("güncelleme esnasında hata fırlatıldı");
      onSuccess(values);
    },
  });

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Add new Customer
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <label className="labelLogin" htmlFor="email">
              Email
            </label>{" "}
            <input
              className="inputLogin"
              type="email"
              name="email"
              placeholder="email"
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
              placeholder="password"
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
              placeholder="firstName"
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
              placeholder="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.lastName && (
              <div className="errorLogin">{formik.errors.lastName}</div>
            )}
            <label className="labelLogin" htmlFor="firstName">
              PhoneNumber
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
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
            <button className="buttonLogin" type="submit">
              Add
            </button>
            <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
