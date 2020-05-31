import React from "react";
import { Link, useHistory } from "react-router-dom";
import { rgbToHex, hexToRgb } from "@material-ui/core";

function Navbar(props) {
  const navStyle = {
    color: hexToRgb("#F76C6C"),
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

  let welcome = <li>Bienvenido {props.user ? props.user.telefono : ""}</li>;
  
  let crear=  (
    <Link style={navStyle} to="/register">
          <strong><li>Crea un Consejo</li></strong>
        </Link>
  );

  return (
    <nav>
      <img src={require("../CamprenderLogo.png")} width="400" height="90">
      </img>
      <ul className="nav-links">
        {!props.user ? "" : crear}

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
