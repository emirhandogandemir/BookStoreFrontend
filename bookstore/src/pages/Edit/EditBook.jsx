import { useState, useEffect } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import BookService from "../../services/bookService";
export default function EditBook() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let bookService = new BookService();
    bookService
      .getAll()
      .then((result) => setBooks(result.data.data))
      .catch("Kitaplar gelirken hata oluştu");
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9">
          <div class="table-responsive">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col">İSim</th>
                  <th scope="col">Ücret</th>
                  <th scope="col">Yayın Evi</th>
                  <th scope="col">Yazar Adı</th>
                  <th scope="col">Kategori Adı</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr>
                    <td>{book.name}</td>
                    <td>{book.price}</td>
                    <td>{book.publisher.name}</td>
                    <td>
                      {book.author.firstName}-{book.author.lastName}
                    </td>
                    <td>{book.category.name}</td>
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
    </div>
  );
}
