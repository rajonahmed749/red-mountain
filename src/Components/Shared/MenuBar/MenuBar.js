import React, { useContext } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../../../images/site-logo.jpg";
import { useHistory } from "react-router-dom";
import styles from "./MenuBar.module.css"
import { UserContext } from '../../../App';

const MenuBar = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >
                <Link to="/"><img className={styles.img} src={logo} alt="site logo" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => history.push("/about")}>About us</Nav.Link>
                    <Nav.Link onClick={() => history.push("/admin")}>Admin</Nav.Link>
                    <Nav.Link onClick={() => history.push("/login")}>login</Nav.Link>
                    <Nav.Link onClick={() => history.push("/orders")}> Order</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;