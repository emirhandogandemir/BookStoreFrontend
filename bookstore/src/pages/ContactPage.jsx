import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function ContactPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      content: "",
    },

    validationSchema: Yup.object({
      //  password:Yup.string().required("url boş bırakılamaz"),
      //  firstName:Yup.string().required("ad boş bırakılamaz"),
      // lastName:Yup.string().required("soyad boş bırakılamaz")
    }),
    onSubmit: (values) => {},
  });

  return (
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
        name
      </label>{" "}
      <input
        className="inputLogin"
        type="text"
        name="name"
        placeholder="FirstName -LastName"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      />
      {formik.errors && formik.touched.name && (
        <div className="errorLogin">{formik.errors.name}</div>
      )}
      <label className="labelLogin" htmlFor="email">
        Content
      </label>{" "}
      <input
        className="inputLogin"
        type="text"
        name="content"
        onChange={formik.handleChange}
        value={formik.values.content}
        onBlur={formik.handleBlur}
      />
      {formik.errors && formik.touched.content && (
        <div className="errorLogin">{formik.errors.content}</div>
      )}
      <br />
      <button className="buttonLogin" type="submit">
        Send
      </button>
      <br />
    </form>
  );
}
