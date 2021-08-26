import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import CustomerService from "../../../services/customerService";
export default function DeleteCustomer({ id, onSuccess }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const deleteCustomer = (id) => {
    let customerService = new CustomerService();
    customerService
      .delete(id)
      .then("başarı ile silindi")
      .catch("silinirken bir hata ile karşılaşıldı");
    onSuccess(id);
  };

  return (
    <>
      <button className="btn btn-danger" onClick={handleShow}>
        Delete
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Silmek istediğinize emin misiniz ?</Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={handleClose}
            onClick={() => deleteCustomer(id)}
          >
            Sil
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
