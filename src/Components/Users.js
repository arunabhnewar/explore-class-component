import React, { Component } from 'react';
import SingleUser from './SingleUser';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            cart: [],
            name: '',
            email: ''
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart(user) {
        const newCart = [...this.state.cart, user];
        this.setState({ cart: newCart })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data }))
    }

    render() {
        return (
            <div>
                <h2>This is users: {this.state.users.length}</h2>
                <h4>Cart: {this.state.cart.length}</h4>
                {
                    this.state.users.map(user => <SingleUser
                        user={user}
                        handleAddToCart={this.handleAddToCart}
                    ></SingleUser>)
                }
            </div>
        );
    }
}

export default Users;