import React from "react";
import "./App.css";
import "../../animations.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedSwitch from "../AnimatedSwitch";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;
