import React, { useState, useEffect } from "react";
import UserService from "../../services/userService";
import { addtoCart } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";
import CardService from "../../services/cardService";
function Cart({ book, userId }) {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [card, setCard] = useState(undefined);

  const handleAddToCart = (book) => {
    dispatch(addtoCart(book));
  };
  let cartService = new CardService();
  function checkCardController() {
    {
      card === null ? cartService.add(user) : console.log("sepet bulunmakta");
    }
  }

  console.log(userId + " : carda gelen properties");

  return (
    <>
      <button className="btn btn-primary" onClick={() => handleAddToCart(book)}>
        AddToCart
      </button>
    </>
  );
}
export default React.memo(Cart);
