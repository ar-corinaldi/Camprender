import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar(props) {
  const navStyle = {
    color: "white",
  };

  let history = useHistory();

  let login = (
    <Link style={navStyle} to="/login">
      <li>Login</li>
    </Link>
  );

  let logout = (
    <Link
      style={navStyle}
      onClick={() => {
        props.setUser(null);
        history.goBack();
      }}
    >
      <li>Logout</li>
    </Link>
  );

  let welcome = <li>Welcome {props.user ? props.user.telefono : ""}</li>;
  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/register">
          <li>Create tip</li>
        </Link>
        <Link style={navStyle} to="/tips">
          <li>List</li>
        </Link>
        {!props.user ? login : welcome}
        {props.user ? logout : ""}
      </ul>
    </nav>
  );
}

export default Navbar;
