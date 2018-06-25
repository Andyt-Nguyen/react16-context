import React, { Component } from 'react'
import { SocketContext } from './SocketProvider'
import SocketHook from './SocketHook'
import Something from './Something'

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