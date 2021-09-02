import React, { useState, useEffect } from "react";
import UserService from "../../services/userService";
import { addtoCart } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";
import CardService from "../../services/cardService";
function Cart({ book }) {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [card, setCard] = useState(undefined);
  const usernameLocalStorage = localStorage.getItem("username");
  const handleAddToCart = (book) => {
    dispatch(addtoCart(book));
  };
  let cartService = new CardService();
  function checkCardController() {
    {
      card === null ? cartService.add(user) : console.log("sepet bulunmakta");
    }
  }

  // kullanıcıyı koydum
  useEffect(() => {
    const usernameLocalStorage = localStorage.getItem("username");
    UserService.getByUsername(usernameLocalStorage).then((result) =>
      setUser(result.data)
    );
  }, []);

  //   useEffect(() => {
  //     cartService
  //       .getByUserId(user.id)
  //       .then(setCard((result) => result.data?.data))
  //       .then(checkCardController());
  //   }, []);
  //console.log(user);
  //console.log(usernameLocalStorage);
  return (
    <>
      <button className="btn btn-primary" onClick={() => handleAddToCart(book)}>
        AddToCart
      </button>
    </>
  );
}
export default React.memo(Cart);
