import React, { Component } from 'react';
import '../assets/style.css';
import Colors from '../assets/colors';


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
        let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight });
    }

    onClickActionBtn() {
        window.scrollTo(0, 650);
    }

    render() {
        // DESKTOP VIEW
        if (this.state.windowWidth > 768) {
            return (
                <div className="hero-img">
                    <div className="my-container center heroContainer">
                        <div className="my-container column-dir ">
                            <h1 className="heroTitle">
                                The Watering Can
                            </h1>
                            <p className="heroDescript heroText">
                                We hope to create a more engaging food system that everyone - farmer, restauranteur, consumer - can be a part of through our dedicated blog and outreach campaigns.
                            </p>
                            <button className="actionBtn heroText" onClick={this.onClickActionBtn}>
                                Get Involved Now!
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            // MOBILE VIEW
            return (
                <div className="hero-img" style={{ height: this.state.windowHeight }}>
                    <div
                        className="my-container center heroContainer column-dir"
                        style={{ height: this.state.windowHeight }}
                    >
                        <h1 className="heroTitle">The Watering Can</h1>
                        <div className="my-container column-dir heroText">
                            <p className="heroDescript">
                                We hope to create a more engaging food system that everyone - farmer, restauranteur, consumer - can be a part of through our dedicated blog and outreach campaigns.
							</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Hero;