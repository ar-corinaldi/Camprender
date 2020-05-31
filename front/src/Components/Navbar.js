import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar(props) {
  const navStyle = {
    color: "white",
  };

  let history = useHistory();

  let login = (
    <Link style={navStyle} to="/login">
      <strong><li>Inicia Sesión</li></strong>
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
      <strong><li>Cerrar Sesión</li></strong>
    </Link>
  );

  let welcome = <li>Welcome {props.user ? props.user.telefono : ""}</li>;
  return (
    <nav>
      <img src={require("../CamprenderLogo.png")}>
      </img>
      <ul className="nav-links">
        <Link style={navStyle} to="/register">
          <strong><li>Crea un Consejo</li></strong>
        </Link>
        <Link style={navStyle} to="/tips">
         <strong><li>Consejos</li></strong> 
        </Link>
        {!props.user ? login : welcome}
        {props.user ? logout : ""}
      </ul>
    </nav>
  );
}

export default Navbar;
