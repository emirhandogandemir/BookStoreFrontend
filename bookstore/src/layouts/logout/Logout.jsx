import React from "react";
import { useUser } from "../../context/UserContext";
import { Dropdown } from "react-bootstrap";
export default function Logout({ logOut }) {
  const [state] = useUser();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {state.username}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Detail</Dropdown.Item>
        <Dropdown.Item>shopping cart</Dropdown.Item>
        <hr></hr>
        <Dropdown.Item onClick={() => localStorage.clear()}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
