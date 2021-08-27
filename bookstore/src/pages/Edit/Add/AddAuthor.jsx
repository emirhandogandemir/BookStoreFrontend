import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthorService from "../../../services/authorService";

export default function AddAuthor({ onSuccess }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  //console.log(customer);
  const formik = useFormik({
    initialValues: {
      birthYear: "",
      deathYear: "",
      firstName: "",
      lastName: "",
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      //  password:Yup.string().required("url boş bırakılamaz"),
      //  firstName:Yup.string().required("ad boş bırakılamaz"),
      // lastName:Yup.string().required("soyad boş bırakılamaz")
    }),
    onSubmit: (values) => {
      //console.log(values);
      let authorService = new AuthorService();
      authorService
        .add(values)
        .then("başarılı bir şekilde güncellendi")
        .catch("güncelleme esnasında hata fırlatıldı");
      onSuccess(values);
    },
  });

  return (
    <>
      <button className="btn btn-primary " onClick={handleShow}>
        Add New Author
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <label className="labelLogin" htmlFor="email">
              birthYear
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              name="birthYear"
              placeholder="doğum yılı"
              onChange={formik.handleChange}
              value={formik.values.birthYear}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.birthYear && (
              <div className="errorLogin">{formik.errors.birthYear}</div>
            )}
            <label className="labelLogin" htmlFor="email">
              deathYear
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              name="deathYear"
              placeholder="ölüm yılı"
              onChange={formik.handleChange}
              value={formik.values.deathYear}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.deathYear && (
              <div className="errorLogin">{formik.errors.deathYear}</div>
            )}
            <label className="labelLogin" htmlFor="email">
              firstName
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              name="firstName"
              placeholder="Adı"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.firstName && (
              <div className="errorLogin">{formik.errors.firstName}</div>
            )}
            <label className="labelLogin" htmlFor="email">
              lastName
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              name="lastName"
              placeholder="Adı"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.lastName && (
              <div className="errorLogin">{formik.errors.lastName}</div>
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
