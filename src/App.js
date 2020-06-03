import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
