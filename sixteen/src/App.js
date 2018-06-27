import React, { Component } from 'react'
import Hello from './Hello'

export const AppContext = React.createContext()

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Andy",
      lastName: "Nguyen"
    }
  }

  render() {
    return (
      <div>
        <AppContext.Provider value={this.state}>
          <Hello />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App