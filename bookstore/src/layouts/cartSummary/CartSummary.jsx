import React from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Dropdown item text="SEPETİNİZ" button icon="cart">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.id}>
              {cartItem.book.name}
            </Dropdown.Item>
          ))}
          <hr />
          <Link to="/cartDetail">
            <Dropdown.Item>
              {" "}
              <button className="btn btn-primary m-1">
                Sepet Detayları
              </button>{" "}
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
