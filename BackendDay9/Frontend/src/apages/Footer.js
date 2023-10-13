import React from 'react';

import '../Assets/acss/Footer.css';
import { Link, NavLink } from "react-router-dom";
export const Footer = () => {

    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                         NinjaCart
                    </section>
                    {/* <section className="footer-info__returns">
                        Returns Policy
                        <br />
                        Delivery
                    </section> */}
                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                    <NavLink to="/Faq">FAQ</NavLink>
                    </section>
                    <section className="footer-info__terms">
                    <NavLink to="/Terms">Terms and Conditions</NavLink>
                        <br />
                        <NavLink to="/Privacy">Privacy</NavLink>
                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">
                        Contact Us
                    </section>
                    <section className="footer-info__contact">
                        NinjaCart@gmail.com
                        <br />
                        9543878364
                    </section>
                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )

}

export default Footer;