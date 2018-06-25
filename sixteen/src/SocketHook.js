import React, { Component } from 'react'
import { SocketContext } from './SocketProvider'

const obj = {
    name:'Andrew',
    lastName: 'Nguyen'
}

// This socket hook is going to be using the React.createContext().Consumer method created
// from react and the main function is class is doing is mapping all of over the children in
// inside of its context and passing the React.createContext().Provider props down to all the
// children components.
class SocketHook extends Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <SocketContext.Consumer>
                    {context => React.Children.map(children, child => React.cloneElement(child, { context })) }
                </SocketContext.Consumer>
            </div>
        )
    }
}

export default SocketHook