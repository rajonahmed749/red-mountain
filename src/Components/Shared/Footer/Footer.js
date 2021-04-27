import React from 'react';
import logo from "../../../images/site-logo.jpg";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <div className="row justify-content-around">
                    <div className="col-md-4 col-sm-12">
                        <img className={styles.logo} src={logo} alt="logo"/>
                        <p>Our experienced team strives to offer a creative <br/> and engaging environment <br/> and the opportunity for children to learn, grow, and thrive.</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h2>Quick Links</h2>
                        <h6>Programs</h6>
                        <h6>Events</h6>
                        <h6>Gallary</h6>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>Our Contacts</h3>
                        <h6>3261 Anmoore Road Brooklyn, NY 11230</h6>
                        <h6>call800-123-4567, Fax: 718-724-3312</h6>
                        <h6>rajon26@student.sust.edu</h6>
                        <h6>Mon-Fri: 9:00 am – 5:00 pm
                           <br/> Sat: 11:00 am – 16:00 pm</h6>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;