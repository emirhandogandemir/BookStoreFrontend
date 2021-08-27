import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import BookService from "../../../services/bookService";
import CategoryService from "../../../services/categoryService";
import PublisherService from "../../../services/publisherService";
import AuthorService from "../../../services/authorService";
import ImageService from "../../../services/imageService";
import { Dropdown } from "semantic-ui-react";
export default function UpdateBook({ book, onSuccess }) {
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let publisherService = new PublisherService();
    let authorService = new AuthorService();
    let categoryService = new CategoryService();
    let imageService = new ImageService();

    publisherService.getAll().then((result) => setPublishers(result.data.data));
    authorService.getAll().then((result) => setAuthors(result.data.data));
    categoryService.getAll().then((result) => setCategories(result.data.data));
    imageService.getAll().then((result) => setImages(result.data.data));
  }, []);

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
      id: book?.id,
      name: book?.name,
      summary: book?.summary,
      price: book?.price,
      author: book?.author,
      category: book?.category,
      publisher: book?.publisher,
      image: book?.image,
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      //  password:Yup.string().required("url boş bırakılamaz"),
      //  firstName:Yup.string().required("ad boş bırakılamaz"),
      // lastName:Yup.string().required("soyad boş bırakılamaz")
    }),
    onSubmit: (values) => {
      //console.log(values);
      let bookService = new BookService();
      bookService
        .update(values)
        .then("başarılı bir şekilde güncellendi")
        .catch("güncelleme esnasında hata fırlatıldı");
      onSuccess(values);
    },
  });

  const categoryOption = categories.map((category, index) => ({
    key: index,
    text: category.name,
    value: category,
  }));
  const publisherOption = publishers.map((publisher, index) => ({
    key: index,
    text: publisher.name,
    value: publisher,
  }));
  const imageOption = images.map((image, index) => ({
    key: index,
    text: image.url,
    value: image,
  }));
  const authorOption = authors.map((author, index) => ({
    key: index,
    text: author.firstName,
    value: author,
  }));
  // console.log(formik.values);
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Update Book
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <label className="labelLogin" htmlFor="email">
              editionNumber
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              name="editionNumber"
              placeholder="editionNumber"
              onChange={formik.handleChange}
              value={formik.values.editionNumber}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.editionNumber && (
              <div className="errorLogin">{formik.errors.editionNumber}</div>
            )}
            <label className="labelLogin" htmlFor="password">
              name
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              placeholder="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.name && (
              <div className="errorLogin">{formik.errors.name}</div>
            )}
            <label className="labelLogin" htmlFor="firstName">
              price
            </label>{" "}
            <input
              className="inputLogin"
              type="number"
              placeholder="price"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.price && (
              <div className="errorLogin">{formik.errors.price}</div>
            )}
            <label className="labelLogin" htmlFor="firstName">
              summary
            </label>{" "}
            <input
              className="inputLogin"
              type="text"
              name="summary"
              placeholder="summary"
              onChange={formik.handleChange}
              value={formik.values.summary}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.summary && (
              <div className="errorLogin">{formik.errors.summary}</div>
            )}
            <label className="labelLogin" htmlFor="category">
              Category
            </label>{" "}
            <Dropdown
              clearable
              item
              placeholder="Category"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "category")
              }
              onBlur={formik.onBlur}
              id="category"
              value={formik.values.category}
              options={categoryOption}
            />
            {formik.errors && formik.touched.category && (
              <div className="errorLogin">{formik.errors.category}</div>
            )}
            <br />
            <label className="labelLogin" htmlFor="category">
              Author
            </label>{" "}
            <Dropdown
              clearable
              item
              placeholder="Author"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "author")
              }
              onBlur={formik.onBlur}
              id="author"
              value={formik.values.author}
              options={authorOption}
            />
            {formik.errors && formik.touched.author && (
              <div className="errorLogin">{formik.errors.author}</div>
            )}
            <label className="labelLogin" htmlFor="category">
              İmage
            </label>{" "}
            <Dropdown
              clearable
              item
              placeholder="image"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "image")
              }
              onBlur={formik.onBlur}
              id="image"
              value={formik.values.image}
              options={imageOption}
            />
            {formik.errors && formik.touched.image && (
              <div className="errorLogin">{formik.errors.image}</div>
            )}
            <label className="labelLogin" htmlFor="category">
              Publisher
            </label>{" "}
            <Dropdown
              clearable
              item
              placeholder="Publisher"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "publisher")
              }
              onBlur={formik.onBlur}
              id="publisher"
              value={formik.values.publisher}
              options={publisherOption}
            />
            {formik.errors && formik.touched.publisher && (
              <div className="errorLogin">{formik.errors.publisher}</div>
            )}
            <br />
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
