import React from "react";
import { useUserContext } from "../../context/UserContext";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Logout({ logOut }) {
  const [state] = useUserContext();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {state?.authenticatedUser?.username}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/userdetail"> Detail </Link>{" "}
        </Dropdown.Item>

        <hr></hr>
        <Dropdown.Item onClick={() => localStorage.clear()}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
