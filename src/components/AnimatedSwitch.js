/* 
TOP LEVEL DOC COMMENT

The purpose of this component is to animate transitions between pages.
During the transition two pages are visible on the screen, but the 
oncoming page must have opposite styling to the exiting page. For this
reason a global switch for styling is insufficient, and you need a more 
involved approach. I used useReducer to mediate class possession for pages.
*/
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./pages/about";
import Home from "./pages/home";
import Work from "./pages/work";

const initialState = {
  routes: {
    "/": "",
    "/work": "",
    "/about": "",
  },
  currentPage: "page--white",
  notCurrentPage: "page--black",
};

export default function AnimatedSwitch() {
  const location = useLocation();

  // this function runs after animations finish to set up correct classes for the next animation
  function updateState(state) {
    // step 1: switch which page is currenPage
    const newState = { ...state };
    const newRoutes = { ...newState.routes };
    Object.keys(newRoutes).forEach((route) => {
      if (route === location.pathname) {
        newRoutes[route] = newState.currentPage;
      } else {
        newRoutes[route] = newState.notCurrentPage;
      }
    });
    newState.routes = newRoutes;

    // step 2: switch which class currentPage refers to
    const intermediary = state.notCurrentPage;
    newState.notCurrentPage = state.currentPage;
    newState.currentPage = intermediary;
    return newState;
  }

  const [state, dispatch] = React.useReducer(updateState, initialState);

  React.useEffect(() => {
    dispatch();
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={1000}
        onExit={dispatch}
      >
        <Switch location={location}>
          <Route exact path="/">
            <Home classInjection={`page ${state.routes["/"]}`} />
          </Route>
          <Route exact path="/about">
            <About classInjection={`page ${state.routes["/about"]}`} />
          </Route>
          <Route exact path="/work">
            <Work classInjection={`page ${state.routes["/work"]}`} />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
