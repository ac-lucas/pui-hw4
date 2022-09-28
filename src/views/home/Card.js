import React, { Component } from 'react';
import { Dropdown, Option } from "./Dropdown";

class Card extends Component {

    render() {
        return (
            <div>
                <img className="card-image" src={this.props.cardImgURL} alt={this.props.cardAlt} />

                <div className="card-title">
                    <h2>{this.props.cardTitle}</h2>
                </div>

                <div className="card-glazing">
                    <label htmlFor="glazing1">Glazing:</label>
                    <Dropdown
                        action="/"
                    >
                        <Option value="Keep original" />
                        <Option value="Sugar milk" />
                        <Option value="Vanilla milk" />
                        <Option value="Double chocolate" />
                    </Dropdown>
                </div>

                <div className="card-size">
                    <div className="card-size-title">
                        <p>Pack size: </p>
                    </div>
                    <div className="card-size-squares">
                        <button type="button" className="button-1 selected">1</button>
                        <button type="button" className="button-3">3</button>
                        <button type="button" className="button-6">6</button>
                        <button type="button" className="button-12">12</button>
                    </div>
                </div>

                <div className="card-price">
                    <div className="card-price-left">
                        <p onChange={this.handlePriceChange}>{this.props.cardPrice}</p>
                    </div>
                    <div className="card-price-right">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card