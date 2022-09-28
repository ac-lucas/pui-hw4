import React, { Component } from 'react';
import './index.css';
import Card from './Card';
import Navbar from './Navbar';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    cardImgURL: "assets/original-cinnamon-roll.jpg",
                    cardAlt: "original cinnamon roll",
                    cardTitle: "Original cinnamon roll",
                    cardPrice: "2.49"
                },
                {
                    cardImgURL: "assets/apple-cinnamon-roll.jpg",
                    cardAlt: "apple cinnamon roll",
                    cardTitle: "Apple cinnamon roll",
                    cardPrice: "3.49"
                },
                {
                    cardImgURL: "assets/raisin-cinnamon-roll.jpg",
                    cardAlt: "raisin cinnamon roll",
                    cardTitle: "Raisin cinnamon roll",
                    cardPrice: "2.99"
                },
                {
                    cardImgURL: "assets/walnut-cinnamon-roll.jpg",
                    cardAlt: "walnut cinnamon roll",
                    cardTitle: "Walnut cinnamon roll",
                    cardPrice: "3.49"
                },
                {
                    cardImgURL: "assets/double-chocolate-cinnamon-roll.jpg",
                    cardAlt: "double chocolate cinnamon roll",
                    cardTitle: "Double-chocolate cinnamon roll",
                    cardPrice: "3.99"
                },
                {
                    cardImgURL: "assets/strawberry-cinnamon-roll.jpg",
                    cardAlt: "strawberry cinnamon roll",
                    cardTitle: "Strawberry cinnamon roll",
                    cardPrice: "3.99"
                }
            ],
        }
    }



    render() {
        return (
            <div>
                <Navbar />

                <div className="cards row">

                    <div className="column" id="original">
                        <Card
                            cardImgURL={this.state.cardData[0].cardImgURL}
                            cardAlt={this.state.cardData[0].cardAlt}
                            cardTitle={this.state.cardData[0].cardTitle}
                            cardPrice={this.state.cardData[0].cardPrice}
                        />

                    </div>

                    <div className="column" id="apple">
                        <Card
                            cardImgURL={this.state.cardData[1].cardImgURL}
                            cardAlt={this.state.cardData[1].cardAlt}
                            cardTitle={this.state.cardData[1].cardTitle}
                            cardPrice={this.state.cardData[1].cardPrice}
                        />
                    </div>

                    <div className="column" id="raisin">
                        <Card
                            cardImgURL={this.state.cardData[2].cardImgURL}
                            cardAlt={this.state.cardData[2].cardAlt}
                            cardTitle={this.state.cardData[2].cardTitle}
                            cardPrice={this.state.cardData[2].cardPrice}
                        />

                    </div>

                </div>

                <div className="cards row" id="walnut">

                    <div className="column">
                        <Card
                            cardImgURL={this.state.cardData[3].cardImgURL}
                            cardAlt={this.state.cardData[3].cardAlt}
                            cardTitle={this.state.cardData[3].cardTitle}
                            cardPrice={this.state.cardData[3].cardPrice}
                        />

                    </div>

                    <div className="column" id="chocolate">
                        <Card
                            cardImgURL={this.state.cardData[4].cardImgURL}
                            cardAlt={this.state.cardData[4].cardAlt}
                            cardTitle={this.state.cardData[4].cardTitle}
                            cardPrice={this.state.cardData[4].cardPrice}
                        />

                    </div>

                    <div className="column" id="strawberry">
                        <Card
                            cardImgURL={this.state.cardData[5].cardImgURL}
                            cardAlt={this.state.cardData[5].cardAlt}
                            cardTitle={this.state.cardData[5].cardTitle}
                            cardPrice={this.state.cardData[5].cardPrice}
                        />

                    </div>

                </div>
            </div>
        );
    }
}

export default Homepage;