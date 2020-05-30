import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
function App() {
  const [nombre, setNombre] = useState("prueba");
  return (
    <div className="App">
      <header className="App-header">Hello World!</header>
      <Navbar nombre={nombre} setNombre={setNombre}></Navbar>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
