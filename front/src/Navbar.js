import React from "react";
import { Link } from "react-router-dom";


function Navbar(props) {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/register">
        <li>Create tip</li>
        </Link>
        <li>List</li>
      </ul>
    </nav>
    
  );
}


export default Navbar;
