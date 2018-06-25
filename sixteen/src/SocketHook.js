import React, { Component } from 'react'
import { SocketContext } from './SocketProvider'

const obj = {
    name:'Andrew',
    lastName: 'Nguyen'
}

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