import React, { Component } from 'react'
import SocketProvider from './SocketProvider'
import Routes from './Routes'

// Import a provider and rap that in the main root of your application
class App extends Component {
  render() {
    return (
      <div>
        <h1>I am the provider</h1>
        <SocketProvider>
          <Routes />          
        </SocketProvider>
      </div>
    );
  }
}

export default App