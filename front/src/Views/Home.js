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
  return (

    <div>
      //<img
        //src="https://png.pngtree.com/element_our/md/20180411/md_5ace0628840fa.jpg"
        //alt="Prendas de vestir"
      ></img>
      
    </div>

  );
}



export default Home;