import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const [nombre, setNombre] = useState("prueba");
  return (
    <div className="App">
      <Router>
        <header className="App-header">Hello World!</header>
        <Navbar nombre={nombre} setNombre={setNombre}></Navbar>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
