import React, { Component } from 'react';
import { Popup } from './Popup';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stringItems: "item",
            showCart: false
        }
    }

    pluralize() {
        if (this.props.items != 1) {
            this.state.stringItems = "items"
        }
        else {
            this.state.stringItems = "item"
        }
    }

    displayCart() {
        if (this.props.items >= 0) {
            this.state.showCart = true
        }
    }

    displayPopup() {
        if (this.props.display) {
            return <Popup
                itemName={this.props.title}
                itemGlazing={this.props.glazing}
                itemPackSize={this.props.pack}
                itemPrice={this.props.cost}
                showPopup={this.props.display}
            />
        }
    }




    render() {
        return (
            <div>
                <div className="navbar">

                    <div className="navbar-left">
                        <img className="navbar-img" src="assets/logo-01.svg" alt="bun bun bake shop cinnamon roll logo" />
                    </div>

                    <div className="navbar-right">

                        <div className="navbar-links">
                            <a href="" id="selected-link">PRODUCTS</a>
                            <a href="">CART</a>
                        </div>

                        <div className="cart-items" style={{ display: this.state.showCart ? "block" : "none" }}>
                            {this.pluralize()}
                            {this.displayCart()}
                            <p>{this.props.items} {this.state.stringItems}</p>
                            <p>Total: $ {this.props.price}</p>
                        </div>

                        <div className="cart-popup">
                            {this.displayPopup()}
                        </div>

                        <hr className="navbar-divider" />

                        <div className="navbar-title">
                            <h1>Our hand-made cinnamon rolls</h1>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar