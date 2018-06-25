import React, { Component } from 'react';
import Hello from './Hello'

// This function will be recieving the props from the provider.
class HomePage extends Component {
    render() {
        return (
            <div>
                HomePage
                <Hello />
            </div>
        )
    }
}

export default HomePage