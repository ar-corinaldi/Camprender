import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const navStyle = {
    color: "white",
  };
  let login = (<Link style={navStyle} to="/login">
  <li>Login</li>
</Link>)

  let logout = (<Link style={navStyle} to="/logout">
  <li>Logout</li>
</Link>) 
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
        {!props.user? login:logout}
      </ul>
    </nav>
  );
}

export default Navbar;
