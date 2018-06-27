import React, { Component } from 'react';

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>AboutPage</h1>
                <p>I am {this.props.stateProps.age} years old</p>
            </div>
        )
    }
}