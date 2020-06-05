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


const makeNewPage = (route) => {
    return React.createElement(
        routesLibrary[route.component],
        {'classInjection': route.class + " page"}
    )
}


export default function AnimatedSwitch() {
    let location = useLocation();
    const [routes, setRoutes] = React.useState(routesTemplate)
    const [currentPage, setCurrentPage] = React.useState('page--white')
    const [notCurrentPage, setNotCurrentPage] = React.useState('page--black')
    const [newStyles, setNewStyles] = React.useState(0)

    // this useEffect sets up logic for the next transition after a transition finishes, and when the website first renders
    React.useEffect(() => {
        // step 1: switch the page that has the currentPage class
        const newRoutes = routes.map(route => {
            const newRoute = {...route}
            if (route.path === location.pathname) {
                newRoute.class = currentPage
            } else {
                newRoute.class = notCurrentPage
            }
            return newRoute
           
        })
        setRoutes(newRoutes)

        
        // step 2: switch the values of currentPage and notCurrentPage
        // if you wanted more than two switching classes, you would do so by factoring out step 2 into its own function with custom logic
        const intermediary = notCurrentPage
        setNotCurrentPage(currentPage)
        setCurrentPage(intermediary)
    }, [newStyles])

    const nextStyle = () => setNewStyles(newStyles + 1)

    return (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" timeout={1000} onExit={nextStyle}>
            <Switch location={location}>
            {routes.map(route => {
                return (
                    <Route path={route.path}>
                     {makeNewPage(route)}
                    </Route>
                )
            })}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )
};