import React from "react";
import { addtoCart } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";

function Cart({ book, userId }) {
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addtoCart(book));
  };

  //console.log(userId + " : carda gelen properties");

  return (
    <>
      <button className="btn btn-primary" onClick={() => handleAddToCart(book)}>
        AddToCart
      </button>
    </>
  );
}
export default React.memo(Cart);
