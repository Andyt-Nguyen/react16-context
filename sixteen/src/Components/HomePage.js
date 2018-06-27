import React, { Component } from 'react';

export default class HomePage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>HomePage</h1>
                <p>My name is {this.props.stateProps.name} {this.props.stateProps.lastName}</p>
            </div>
        )
    }
}