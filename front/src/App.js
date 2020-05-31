import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Views/Navbar";

import Tips from "./Container/Tips";
import ATip from "./Components/ATip";

import Home from "./Views/Home";

import CreateTips from "./Views/CreateTips";

import CreateUser from "./Views/CreateUser";

function App() {
  const [nombre, setNombre] = useState("prueba");
  return (
    <div className="App">
      <Router>
        <Navbar nombre={nombre} setNombre={setNombre}></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          <Route exact path="/tips" component={Tips} />{" "}
          <Route exact path="/tips/:tipId" component={ATip} />{" "}
          <Route exact path="/register" component={CreateTips} />{" "}
          <Route exact path="/registerUser" component={CreateUser} />{" "}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
