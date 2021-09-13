import React from "react";
import Card from "../layouts/card/Card";
import CardInCart from "../layouts/card/CardToCart/CardInCart";
import { useSelector } from "react-redux";
export default function CartDetail() {
  const cartItems = useSelector((state) => state.cart);
  //console.log(cartItems, "redux");
  return cartItems.cartItems.length ? (
    <div className="container">
      <div className="row">
        <div className="col-9">
          {cartItems.cartItems.map((cartItem) => (
            <CardInCart book={cartItem.book}></CardInCart>
          ))}
        </div>

        <div className="col-3 mt-5">
          <div className="row border border-primary">
            <div>
              <h3>144 tl</h3>
              <button className="btn btn-secondary">Siparişi ver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
