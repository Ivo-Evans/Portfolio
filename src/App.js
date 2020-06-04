import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

const exitFunction = (event) => {
    // console.log('hello world', event)
}

// note that in the new React Router you can do this:
/*
<Route path="/example">
  <MyPage prop1={x ? prop1 : ""} />
</Route> // i.e. pass props to routes if the component is a child
*/

const AnimatedSwitch = () => {
    let location = useLocation();
    console.log(location)
    return (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" timeout={1000} onExit={exitFunction}>
            <Switch location={location}>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )
};

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
