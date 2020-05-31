import { makeStyles } from "@material-ui/core/styles";
import React, { Item, useState, useEffect } from "react";
import ATip from "../Components/ATip";
import { Container } from "@material-ui/core";
import { Row, Col } from 'react-bootstrap';


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

  const [state, setState] = useState({ tips: [] });

  const [toptip, setTopTip] = useState(null);



  useEffect(() => {
    fetching();
    

  }, []);

  let max=0;

  const fetching = async () => {
    fetch("/tips")
      .then((res) => res.json())
      .then((respuesta) => {
        let tempState = {};
        tempState.tips = respuesta;
        setState(tempState);
        console.log(state);

        tempState.tips.map((element, i) => {
          if(element.likes>max){
            max=element.likes;
            setTopTip(element);
            console.log(toptip);
          }
        });

        });


  };

  

  


  return (
    <div className="d-flex flex-wrap justify-content-center">
            <strong>  <font size="+2" >Consejo del Día</font> </strong> 

      <Container className="d-flex flex-wrap justify-content-center">
        
            <Row>
              <Col>
              {toptip?<ATip user={props.user} style={{ float: "left" }} tip={toptip}/>:""}
              </Col>
            </Row>
     
            <Row className="d-flex flex-wrap justify-content-center">
   
      {state.tips.map((element, index) => {
          return (
            <div key={index} style={{ dispaly: "flex" }} className="m-2">
              <ATip user={props.user} style={{ float: "left" }} tip={element}></ATip>
           </div>
            

          );
      })}
                </Row>

      </Container>
      
    </div>

  );
}



export default Home;