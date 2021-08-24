import React, { useState, useEffect } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import AuthorService from "../../services/authorService";
export default function EditAuthor() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    let authorService = new AuthorService();
    authorService
      .getAll()
      .then((result) => setAuthors(result.data.data))
      .catch("Yazarlar yüklenemedi");
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9">
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Birth Date</th>
                <th scope="col">Death Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr>
                  <td>{author.firstName}</td>
                  <td>{author.lastName}</td>
                  <td>{author.birthYear}</td>
                  <td>{author.deathYear}</td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Update
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
