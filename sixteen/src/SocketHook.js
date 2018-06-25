import React, { Component } from 'react';

const obj = {
    name:'Andrew',
    lastName: 'Nguyen'
}

class SocketHook extends Component {
    render() {
        const { children } = this.props
        var childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { obj }))

        return (
            <div>
                { childrenWithProps }
            </div>
        )
    }
}

export default SocketHook