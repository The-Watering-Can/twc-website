import React, { Component } from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import '../assets/style.css';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

import Colors from '../assets/colors';
const color = Colors.darkBlue;

class Header extends Component {
    state = {
        toggleOpen: false,
        atTop: true
    };
    Toggle = () => {
        this.setState({ toggleOpen: !this.state.toggleOpen });
        console.log(this.state.toggleOpen);
    };

    headerColor = () => {
        if (!this.state.atTop || this.state.toggleOpen || this.props.solid) {
            return { backgroundColor: color };
        } else {
            return { backgroundColor: 'transparent' };
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const attop = window.scrollY < 100 ? true : false;
            this.setState({ atTop: attop });
        });
    }
    //

    onClick() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="header" style={this.headerColor()}>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Link to="/" className="my-container logo" onClick={this.onClick}>
                        <img
                            alt="The Watering Can"
                            src={logo}
                            className="d-inline-block align-top logo"
                            style={styles.logo}
                        />
                    </Link>
                    <Navbar.Toggle onClick={this.Toggle} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto" />
                        <Nav>
                            <Link to="/" style={styles.navLink} className="nav-link" onClick={this.onClick}>
                                Our Mission
							</Link>
                            <Link to="/" style={styles.navLink} className="nav-link" onClick={this.onClick}>
                                Chapters
							</Link>
                            <Link to="/" style={styles.navLink} className="nav-link" onClick={this.onClick}>
                                Restaurants
							</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

const styles = {
    nameLink: {
        fontSize: '23px',
        fontWeight: '500',
        lineHeight: '22px',
        color: Colors.lightest,
        textDecoration: 'none',
        textShadow: '1px 1px 20px #272635'
    },
    logo: {
        height: 60,
        margin: 10
    },
    navLink: {
        backgroundColor: 'white !important'
    }
};

export default Header;
