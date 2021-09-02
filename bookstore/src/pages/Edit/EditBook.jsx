import { useState, useEffect } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import BookService from "../../services/bookService";
import DeleteBook from "./Delete/DeleteBook";
import AddBook from "./Add/AddBook";
import UpdateBook from "./Update/UpdateBook";
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
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th></th>
                  <th scope="col">İSim</th>
                  <th scope="col">Ücret</th>
                  <th scope="col">Yayın Evi</th>
                  <th scope="col">Yazar Adı</th>
                  <th scope="col">Kategori Adı</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr>
                    <td key={index}></td>
                    <td>{book.name}</td>
                    <td>{book.price}</td>
                    <td>{book.publisher.name}</td>
                    <td>
                      {book.author.firstName}-{book.author.lastName}
                    </td>
                    <td>{book.category.name}</td>
                    <td>
                      <UpdateBook
                        onSuccess={handleCustomerUpdateSuccess}
                        book={book}
                      ></UpdateBook>
                    </td>
                    <td>
                      <DeleteBook
                        id={book.id}
                        onSuccess={handleCustomerDeleteSuccess}
                      ></DeleteBook>
                    </td>
                  </tr>
                ))}
                <AddBook onSuccess={handleCustomerAddSuccess}></AddBook>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  function handleCustomerUpdateSuccess(updatedBook) {
    const newBooks = [...books]; // aynı referans olmasın diye
    const targetIndex = books.findIndex((book) => book.id === updatedBook.id); // değişiklik yapılmış olan verinin indexini
    newBooks.splice(targetIndex, 1, updatedBook);
    setBooks(newBooks);
  }
  function handleCustomerDeleteSuccess(id) {
    const newBooks = [...books];
    const targetIndex = books.findIndex((book) => book.id === id);
    newBooks.splice(targetIndex, 1);
    setBooks(newBooks);
  }

  function handleCustomerAddSuccess(updatedBook) {
    const newBooks = [...books, updatedBook]; // aynı referans olmasın diye
    setBooks(newBooks);
  }
}
