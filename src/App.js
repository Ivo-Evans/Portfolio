import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import AnimatedSwitch from './AnimatedSwitch'

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
