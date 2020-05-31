import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";



function Home(props) {

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'center'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  

  const classes = useStyles();

  const butStyle={
    color: 'Black'
  };


  return (

    
    <div>
      {/* <h3 className="gabriela-font">Thanks for everything</h3> */}
      <img
        src="https://png.pngtree.com/element_our/md/20180411/md_5ace0628840fa.jpg"
        //alt="Prendas de vestir"
        height="300"
        width="300"
      ></img>
      <ul>
        <Link style={butStyle} to="/registerUser">
        <li>Registrate</li>
        </Link>
        <Link style={butStyle} to="/login">
        <li>Inicia Sesión</li>
        </Link>
      </ul>
      
    </div>

  );
}



export default Home;