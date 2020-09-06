import React from "react"
import Colors from '../assets/colors'
import '../assets/style.css';

import logo from '../assets/images/logo-less.png';

const Footer = () => (
    <div className="footer" style={{ backgroundColor: Colors.mintGreen }}>
        <div className="footer-col">
            <p className="footer-title">Connect Now</p>
            <hr className="footer-line"></hr>
            <div className="footer-info">
                <p>University Chapter</p>
                <p>Restaurant Partners</p>
            </div>
        </div>
        <div className="footer-col">
            <img src={logo} alt="The Watering Can" className="logo" />
            <p className="footer-logo">The Watering Can</p>
        </div>
        <div className="footer-col">
            <p className="footer-title">Contact Us</p>
            <hr className="footer-line"></hr>
            <div className="footer-info">
                <p>Email: thewateringcan@gmail.com</p>
                <p>Phone: </p>
            </div>

        </div>
    </div>
)
export default Footer