import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
export default function Card({ book }) {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="cardHomePage">
        <img
          src={book.image.url}
          alt="bookstore"
          className="img-fluid"
          style={{ maxHeight: "250px" }}
        />
        <p>Kitap Adı:{book.name}</p>
        <p>Kitap Özeti{book.summary}</p>
        <p>Kitap Fiyatı {book.price}</p>
        <Link to={`/books/${book.id}`}>
          {" "}
          <button type="button" className="btn btn-dark">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
}
