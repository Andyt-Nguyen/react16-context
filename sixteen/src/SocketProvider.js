import React, { Component } from 'react';

export const SocketContext = React.createContext()

class SocketProvider extends Component {

    callMeMaybe() {
        const obj = {
            name: 'Yoy yoyyy',
            lyrics: 'Hey I just met you and this is crazy so here\'s my number so call me maybe',
            food: 'bacon'
        }

        return obj
    }


    render() {
        return (
            <SocketContext.Provider value={{obj:this.callMeMaybe()}}>
                {this.props.children}
            </SocketContext.Provider>
        )
    }
}

export default SocketProvider