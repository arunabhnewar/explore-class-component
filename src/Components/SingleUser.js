import React, { Component } from 'react';

class SingleUser extends Component {
    render() {
        return (
            <div style={{
                border: '1px solid gray',
                margin: '5px'
            }}>
                <h2>Name: {this.props.user.name}</h2>
                <h6>Email: {this.props.user.email}</h6>
                <button
                    onClick={e => this.props.handleAddToCart(this.props.user)}
                >Add to Cart</button>
            </div>
        );
    }
}

export default SingleUser;