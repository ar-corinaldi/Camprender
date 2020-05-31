import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Views/Navbar";

import Tips from "./Views/Tips";
import ATip from "./Views/ATip";

import Home from "./Views/Home";

import CreateTips from "./Views/CreateTips";

import CreateUser from "./Views/CreateUser";
import Login from "./Views/Login";

function App() {
  const [nombre, setNombre] = useState("prueba");
  const [user, setUser] = useState(null);
  useEffect( () => {
    console.log(user);
    if(user) localStorage.setItem("user",  user);
  } , [user]);

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
          <Route exact path="/login" component={() => <Login user={user} setUser={setUser}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
