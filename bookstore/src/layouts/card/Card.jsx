import React from "react";
import "./card.scss";
export default function Card({ book }) {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="cardHomePage">
        <img
          src={"../../../assets/images/bookstore.jpg"}
          alt="bookstore"
          className="img-fluid"
        />
        <p>Ahmet Ümit</p>
        <p>Kitap fiyatı :30</p>
      </div>
    </div>
  );
}
