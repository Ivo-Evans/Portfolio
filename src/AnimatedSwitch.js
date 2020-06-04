import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

const routesTemplate = [
    {
        path: "/about",
        component: 'About',
    },
    {
        path: "/contact",
        component: 'Contact',
    },
    {
        path: "/",
        component: 'Home',
    }
]

const routesLibrary = {About, Contact, Home}

const exitFunction = (event) => {
    // console.log('hello world', event)
}

export default function AnimatedSwitch() {

    let location = useLocation();


    
    const [routes, ] = React.useState(routesTemplate)

    return (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" timeout={1000} onExit={exitFunction}>
            <Switch location={location}>
            {routes.map(route => {
                return (
                    <Route path={route.path}>
                        {routesLibrary[route.component]}
                    </Route>
                )
            })}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )
};