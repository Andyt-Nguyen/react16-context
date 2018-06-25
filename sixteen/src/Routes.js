import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/' component={HomePage} />
                        <Route path='/aboutpage' component={AboutPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes