import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import { AppContext } from './AppProvider'

// Custom Route
const StateRoute = ({ component:Component, rest}) => (
    <Route {...rest} render={ props => (
        <AppContext.Consumer>
            { context => <Component {...props} stateProps={context} /> }
        </AppContext.Consumer>
    )} />
)

const Routes = () => (
    <Switch>
        <StateRoute exact path="/" component={HomePage} />
        <StateRoute exact path="/about" component={AboutPage} />
    </Switch>
);

export default Routes;