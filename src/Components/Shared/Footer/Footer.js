import React from 'react';
import logo from "../../../images/site-logo.jpg";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faAt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className={`${styles.footer} mt-5`}>
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-12 mt-4 text-center">
                    <img className={styles.logo} src={logo} alt="logo"/> <br/>
                    <h6>RED MOUNTAIN KIDS</h6>
                </div>
                <div className="col-md-2 col-sm-12 mt-3">
                    <small>Developer</small> <br/>
                    <a href="https://ahmed-rajon.web.app/" target="_blank" rel="noreferrer"> &reg;ajon</a>
                </div>
                <div className="col-md-3 col-sm-12 mt-4">
                <FontAwesomeIcon icon={faPhoneVolume} size="1x"/> <small>01775655564</small> <br/>
                    <FontAwesomeIcon icon={faAt} size="1x"/><small>  rajon26@student.sust.edu</small>
                </div>
            </div>       
        </div>
    );
};

export default Footer;