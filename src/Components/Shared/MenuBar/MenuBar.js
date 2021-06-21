import React from 'react';
import {Navbar, Nav,Form, NavDropdown,FormControl,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../../../images/site-logo.jpg";
import { useHistory } from "react-router-dom";
import styles from "./MenuBar.module.css"

const MenuBar = () => {
    let history = useHistory();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand >
                  <Link to="/"><img className={styles.img} src={logo} alt="site logo"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link onClick={()=>history.push("/")}>Home</Nav.Link>
                    <Nav.Link onClick={()=>history.push("/about")}>About us</Nav.Link>
                    <Nav.Link onClick={()=>history.push("/admin")}>Admin</Nav.Link>
                    
                    <NavDropdown title="Contacts" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={()=>history.push("/login")}>login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MenuBar;