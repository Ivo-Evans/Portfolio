import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./pages/about";
import Home from "./pages/home";
import Work from "./pages/work";

const initialState = {
  routes: [
    {
      path: "/about",
      component: "About",
    },
    {
      path: "/work",
      component: "Work",
    },
    {
      path: "/",
      component: "Home",
    },
  ],
  routesLibrary: { About, Home, Work },
  currentPage: "page--white",
  notCurrentPage: "page--black",
};

export default function AnimatedSwitch() {
  const location = useLocation();

  function updateState(state) {
    const currentLocation = location.pathname;
    const newState = { ...state }; // deep enough?

    // step 1: change which page has currentPage binding
    const newRoutes = state.routes.map((route) => {
      const newRoute = { ...route };
      if (route.path === currentLocation) {
        newRoute.class = state.currentPage;
      } else {
        newRoute.class = state.notCurrentPage;
      }
      return newRoute;
    });
    newState.routes = newRoutes;

    // step 2: change value referenced by currentPage binding
    const intermediary = state.notCurrentPage;
    newState.notCurrentPage = state.currentPage;
    newState.currentPage = intermediary;
    return newState;
  }

  const [state, dispatch] = React.useReducer(updateState, initialState);

  React.useEffect(() => {
    dispatch();
  }, []);

  const makeNewPage = (route) => {
    return React.createElement(state.routesLibrary[route.component], {
      classInjection: `${route.class} page`,
    });
  };

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={1000}
        onExit={dispatch}
      >
        <Switch location={location}>
          {state.routes.map((route) => {
            return <Route path={route.path}>{makeNewPage(route)}</Route>;
          })}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
