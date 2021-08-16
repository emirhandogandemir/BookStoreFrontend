import { useEffect, useState } from "react";
import { useParams } from "react-router";

import BookService from "../services/bookService";
export default function BookDetail() {
  let { id } = useParams();
  const [book, setBook] = useState({});
  const [count, setCount] = useState(1);

  function countControl() {
    if (count >= 0) {
      return true;
    } else {
      return false;
    }
  }
  useEffect(() => {
    let bookService = new BookService();
    bookService.getById(id).then((result) => setBook(result.data.data));
  }, []);
  console.log(book);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={book.image?.url}
            alt="bookImage"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-sm-6 ">
          <div className="row">
            <div className="col-sm-6 bg-light">
              <p>Kitap Adı : {book.name}</p>
              <p>Kitap Özeti : {book.summary}</p>
              <p> {book.editionNumber}</p>
              <p>
                Kitap Yazarı : {book.author?.firstName} {book.author?.lastName}
              </p>
              Kitap Kategorisi : {book.category?.name}
              <p>Kitap YayınEvi : {book.publisher?.name}</p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm4">
                      <span>{count} </span>
                    </div>
                    <div className="col-sm4">
                      {" "}
                      <button
                        className="btn btn-primary d-inline"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="col-sm4">
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={
                          countControl()
                            ? () => setCount(count - 1)
                            : console.log("minimum")
                        }
                      >
                        {" "}
                        --{" "}
                      </button>
                    </div>
                  </div>{" "}
                </div>

                <div className="col-sm-8">
                  {" "}
                  <button className="btn btn-dark">Add To Card</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
