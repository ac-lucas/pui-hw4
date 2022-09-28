import React, { Component } from 'react';
import { Dropdown, Option } from "./Dropdown";

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updatedCardPrice: this.props.cardPrice
        }
    }


    handlePriceChange = (event) => {
        let newPrice = "0";
        let multiplier = "1";

        if (event.target.value === "Vanilla milk") {
            newPrice = ".5"
        }
        else if (event.target.value === "Double chocolate") {
            newPrice = "1.5"
        }

        if (event.target.value === "3") {
            multiplier = 3;
        }
        else if (event.target.value === "6") {
            multiplier = 5;
        }
        else if (event.target.value === "12") {
            multiplier = 10;
        }
        newPrice = +newPrice + +this.props.cardPrice;
        newPrice = +newPrice * +multiplier;
        newPrice = newPrice.toFixed(2);
        this.setState({ updatedCardPrice: newPrice });
    };

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
                        onChange={this.handlePriceChange}
                    >
                        <Option textContent="Keep original" />
                        <Option textContent="Sugar milk" />
                        <Option textContent="Vanilla milk" />
                        <Option textContent="Double chocolate" />
                    </Dropdown>
                </div>

                <div className="card-size">
                    <div className="card-size-title">
                        <p>Pack size: </p>
                    </div>
                    <div className="card-size-squares">

                        {/*referenced from https://codepen.io/w3programmings/pen/zzRKpy */}
                        <form className="boxed" onChange={this.handlePriceChange}>
                            <input type="radio" id="pack1" name="card-size" value="1" />
                            <label htmlFor="pack1">1</label>

                            <input type="radio" id="pack3" name="card-size" value="3" />
                            <label htmlFor="pack3">3</label>

                            <input type="radio" id="pack6" name="card-size" value="6" />
                            <label htmlFor="pack6">6</label>

                            <input type="radio" id="pack12" name="card-size" value="12" />
                            <label htmlFor="pack12">12</label>
                        </form>
                    </div>
                </div>

                <div className="card-price">
                    <div className="card-price-left">
                        <p>{this.state.updatedCardPrice}</p>
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