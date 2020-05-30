import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";

import Tips from "./Container/Tips";
import ATip from "./Components/ATip";

import Home from "./Home";


function App() {
  const [nombre, setNombre] = useState("prueba");
  return (
    <div className="App">

      <header className="App-header">Hello World!</header>
      <Navbar nombre={nombre} setNombre={setNombre}></Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} /> {" "}
          <Route exact path="/tips" component={Tips} /> {" "}
          <Route exact path="/tips/:tipId" component={ATip} /> {" "}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
