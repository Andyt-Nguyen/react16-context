import React, { Component } from 'react';


// You can see here that we exported two function from this file.
// I exported the Socket Context so that every component has a reference to it
// and we have the React.createContext().Provider that takes a value in its props.
// This Provider will be the put on the root of your App js file so that each and 
// every one of your components will be able use any of its props.


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