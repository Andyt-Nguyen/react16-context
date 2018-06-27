import React, { Component } from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'
import { AppProvider } from './AppProvider'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name:"Andrew",
      lastName:"Nguyen",
      age: 200
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Page</Link></li>
        </ul>
          <div>
            <AppProvider value={this.state}>
              <Routes />
            </AppProvider>
          </div>
      </div>
    );
  }
}

export default App