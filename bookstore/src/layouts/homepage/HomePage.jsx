import React, { useState, useEffect } from "react";
import "./homePage.scss";
import BookList from "../../pages/BookList";
import { useUserContext } from "../../context/UserContext";
import CardService from "../../services/cardService";
function HomePage() {
  const [cart, setCart] = useState(null);

  const [state] = useUserContext();
  //console.log(state?.authenticatedUser?.id);

  const userId = state?.authenticatedUser?.id;

  console.log(userId);
  useEffect(() => {
    new CardService().getByUserId();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="header-homepage">
              The BookWorm Editors --{state?.authenticatedUser?.username}--
              <h3>Featured Books Of the September</h3>
              <button className="btn btn-dark btn-lg">See More</button>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src={"../../../assets/images/library.jpg"}
              alt="library"
              className="img-fluid img-thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="container cardDiv">
        <BookList></BookList>
      </div>
    </div>
  );
}
export default React.memo(HomePage);
