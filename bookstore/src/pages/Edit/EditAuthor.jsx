import React, { useState, useEffect } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import AuthorService from "../../services/authorService";
import AddAuthor from "./Add/AddAuthor";
import UpdateAuthor from "./Update/UpdateAuthor";
import DeleteAuthor from "./Delete/DeleteAuthor";
export default function EditAuthor() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    let authorService = new AuthorService();
    authorService
      .getAll()
      .then((result) => setAuthors(result.data.data))
      .catch("Yazarlar yüklenemedi");
  }, []);
  console.log(authors);
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
                    <UpdateAuthor
                      author={author}
                      onSuccess={handleAuthorUpdateSuccess}
                    ></UpdateAuthor>
                  </td>
                  <td>
                    <DeleteAuthor
                      id={author?.id}
                      onSuccess={handleAuthorDeleteSuccess}
                    ></DeleteAuthor>
                  </td>
                </tr>
              ))}
              <AddAuthor onSuccess={handleAuthorAddSuccess}></AddAuthor>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  function handleAuthorAddSuccess(updatedAuthor) {
    const newAuthors = [...authors, updatedAuthor]; // aynı referans olmasın diye
    setAuthors(newAuthors);
  }

  function handleAuthorUpdateSuccess(updatedAuthor) {
    const newAuthors = [...authors]; // aynı referans olmasın diye
    const targetIndex = authors.findIndex(
      (author) => author.id === updatedAuthor.id
    ); // değişiklik yapılmış olan verinin indexini
    newAuthors.splice(targetIndex, 1, updatedAuthor);
    setAuthors(newAuthors);
  }

  function handleAuthorDeleteSuccess(id) {
    const newAuthors = [...authors];
    const targetIndex = authors.findIndex((author) => author.id === id);
    newAuthors.splice(targetIndex, 1);
    setAuthors(newAuthors);
  }
}
