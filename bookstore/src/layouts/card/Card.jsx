import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import "./card.scss";
export default function Card({ book }) {
  return (
    <div className="col-sm-6 col-lg-3 mt-5">
      <div className="cardHomePage">
        <img
          src={book?.image?.url}
          alt="bookstore"
          className="img-fluid"
          style={{
            maxHeight: "250px",
            maxWidth: "200px",
            minHeight: "250px",
            minWidth: "200px",
          }}
        />
        <p>Kitap Adı:{book.name}</p>
        <p>Kitap Özeti{book.summary}</p>
        <p>Kitap Fiyatı {book.price}</p>
      </div>
      <Link to={`/books/${book.id}`}>
        {" "}
        <button type="button" className="btn btn-dark mb-3">
          See Details
        </button>
      </Link>
      <br />
      <Cart book={book}> </Cart>
    </div>
  );
}
