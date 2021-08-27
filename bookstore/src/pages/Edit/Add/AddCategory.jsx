import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CategoryService from "../../../services/categoryService";
import { Modal } from "react-bootstrap";

export default function AddCategory({ onSuccess }) {
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
      name: "",
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      //  password:Yup.string().required("url boş bırakılamaz"),
      //  firstName:Yup.string().required("ad boş bırakılamaz"),
      // lastName:Yup.string().required("soyad boş bırakılamaz")
    }),
    onSubmit: (values) => {
      //console.log(values);
      let categoryService = new CategoryService();
      categoryService
        .add(values)
        .then("başarılı bir şekilde güncellendi")
        .catch("güncelleme esnasında hata fırlatıldı");
      onSuccess(values);
    },
  });

  return (
    <>
      <button className="btn btn-primary " onClick={handleShow}>
        Add New Category
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <label className="labelLogin" htmlFor="email">
              name
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              name="name"
              placeholder="category name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.name && (
              <div className="errorLogin">{formik.errors.name}</div>
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
