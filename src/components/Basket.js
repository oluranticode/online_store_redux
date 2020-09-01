import React, { Component } from 'react'

export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
            {cartItems.length === 0 ? "Basket is empty" : 
            <div> You have number of {cartItems.length} in your Basket 
            {cartItems.length > 0 &&
                <div>
                <ul>
                { cartItems.map(item => 
                    <li>
                        <b>{item.title}</b>
                        x {item.count}
                        <button className="btn btn-danger" 
                        onClick={(e) => this.props.handleRemoveFromCart(e, item)} >
                        X
                            </button>
                        </li>
                    )}
                    </ul>
                
                        </div>
            }
            </div>
        }
            
            </div>
        )
    }
}
