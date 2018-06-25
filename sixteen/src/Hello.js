import React, { Component } from 'react'
import { SocketContext } from './SocketProvider'
import SocketHook from './SocketHook'
import Something from './Something'

// Socket Hook is the component that is going to give all of your components
// the props from the Provider
class Hello extends Component {
    render() {
        // console.log(this.props)
        return (
            <SocketHook>
                <Something />
            </SocketHook>
        );
    }
}

export default Hello