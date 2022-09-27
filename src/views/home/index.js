import React, { Component } from 'react';
import './index.css';
import Card from './Card';
import Navbar from './Navbar';


function Homepage() {

    return (
        <div>
            <Navbar />

            <div className="cards row">

                <div className="column" id="original">
                    <Card
                        cardImgURL="assets/original-cinnamon-roll.jpg"
                        cardAlt="original cinnamon roll"
                        cardTitle="Original cinnamon roll"
                        cardPrice="2.49"
                    />

                </div>

                <div className="column" id="apple">
                    <Card
                        cardImgURL="assets/apple-cinnamon-roll.jpg"
                        cardAlt="apple cinnamon roll"
                        cardTitle="Apple cinnamon roll"
                        cardPrice="3.49"
                    />
                </div>

                <div className="column" id="raisin">
                    <Card
                        cardImgURL="assets/raisin-cinnamon-roll.jpg"
                        cardAlt="raisin cinnamon roll"
                        cardTitle="Raisin cinnamon roll"
                        cardPrice="2.99"
                    />

                </div>

            </div>

            <div className="cards row" id="walnut">

                <div className="column">
                    <Card
                        cardImgURL="assets/walnut-cinnamon-roll.jpg"
                        cardAlt="walnut cinnamon roll"
                        cardTitle="Walnut cinnamon roll"
                        cardPrice="3.49"
                    />

                </div>

                <div className="column" id="chocolate">
                    <Card
                        cardImgURL="assets/double-chocolate-cinnamon-roll.jpg"
                        cardAlt="double chocolate cinnamon roll"
                        cardTitle="Double-chocolate cinnamon roll"
                        cardPrice="3.99"
                    />

                </div>

                <div className="column" id="strawberry">
                    <Card
                        cardImgURL="assets/strawberry-cinnamon-roll.jpg"
                        cardAlt="strawberry cinnamon roll"
                        cardTitle="Strawberry cinnamon roll"
                        cardPrice="3.99"
                    />

                </div>

            </div>
        </div>
    );
}

export default Homepage;