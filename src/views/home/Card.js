import React, { Component } from 'react';
import { Dropdown, Option } from "./Dropdown";

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updatedCardPrice: this.props.cardPrice,
            newPrice: 0,
            glazingPrice: 0,
            multiplier: 1,
            cardTotalPrice: 0
        }
    }


    handlePriceChange = (event) => {

        if (event.target.value === "Vanilla milk") {
            this.state.glazingPrice = ".5"
        }
        else if (event.target.value === "Double chocolate") {
            this.state.glazingPrice = "1.5"
        }
        else if (event.target.value === "Keep original") {
            this.state.glazingPrice = "0"
        }
        else if (event.target.value === "Sugar milk") {
            this.state.glazingPrice = "0"
        }


        if (event.target.value === "3") {
            this.state.multiplier = 3;
        }
        else if (event.target.value === "6") {
            this.state.multiplier = 5;
        }
        else if (event.target.value === "12") {
            this.state.multiplier = 10;
        }
        else if (event.target.value === "1") {
            this.state.multiplier = 1;
        }

        this.state.newPrice = +this.state.glazingPrice + +this.props.cardPrice;
        this.state.newPrice = +this.state.newPrice * +this.state.multiplier;
        this.state.newPrice = this.state.newPrice.toFixed(2);
        this.setState({ updatedCardPrice: this.state.newPrice });
    };

    handleAddToCart = (event) => {
        this.props.priceCallBack(this.state.updatedCardPrice)
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
                            <input type="radio" id={this.props.id1} name="card-size" value="1" />
                            <label htmlFor={this.props.id1}>1</label>

                            <input type="radio" id={this.props.id2} name="card-size" value="3" />
                            <label htmlFor={this.props.id2}>3</label>

                            <input type="radio" id={this.props.id3} name="card-size" value="6" />
                            <label htmlFor={this.props.id3}>6</label>

                            <input type="radio" id={this.props.id4} name="card-size" value="12" />
                            <label htmlFor={this.props.id4}>12</label>
                        </form>
                    </div>
                </div>

                <div className="card-price">
                    <div className="card-price-left">
                        <p>{this.state.updatedCardPrice}</p>
                    </div>
                    <div className="card-price-right">
                        <button type="button" onClick={this.handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card