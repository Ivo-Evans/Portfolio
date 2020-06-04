import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import AnimatedSwitch from './AnimatedSwitch'


function App() {
    let elements = [<h1>Hello</h1>, <h1>Goodbye</h1>]
    console.log(elements)
  return (
      <div className="app">
        <BrowserRouter>
            <AnimatedSwitch />
        </BrowserRouter>
      </div>
  );
}

export default App;
