import React, { Component } from 'react'
import { AppContext } from './App'

class Hello2 extends Component {
    render() {
        return (
            <h1>
                <AppContext.Consumer>
                    {
                        context => context.name
                    }
                </AppContext.Consumer>
            </h1>
        )
    }
}

export default Hello2