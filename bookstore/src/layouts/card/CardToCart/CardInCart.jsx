import React from "react";

export default function CardInCart({ book }) {
  return (
    <div className="row m-5 border ">
      <div className="col-3">
        <img
          src={book?.image?.url}
          alt="bookstore"
          className="img-fluid"
          style={{
            maxHeight: "200px",
            maxWidth: "200px",
            minHeight: "200px",
            minWidth: "200px",
          }}
        />
      </div>
      <div className="col-9">
        <div className="row mt-3">
          <h3>Kitap Adı:{book.name}</h3>
        </div>
        <div className="row mt-3">
          <h3>
            <h5>Kitap Özeti{book.summary}</h5>
          </h3>
        </div>

        <div className="row ">
          <h3>
            {book.price} <span>tl</span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
