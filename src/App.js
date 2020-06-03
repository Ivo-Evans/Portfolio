import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={Home}/>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

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
