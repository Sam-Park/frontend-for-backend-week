import React, { Component } from "react";
import { Col, Nav, Navbar, Button } from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import "./NoteCss.css";
import axios from "axios";
class NavBar extends Component {
  render() {
    return (
      <Nav className="navBar">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "'Roboto', san-serif",
            fontWeight: "bold",
            lineHeight: "35px",
            marginBottom: "30px",
          }}
        >
          Lambda Notes
        </h1>

        <Link to="/">
          <Button className="button">Home</Button>
        </Link>
        <Link to="/notes">
          <Button className="button">View Your Notes</Button>
        </Link>

        <Link to="/NewNote">
          <Button className="button">Create New Note</Button>
        </Link>
        <Link to="/login">
          <Button className="button">Login</Button>
        </Link>
        <Link to="/register">
          <Button className="button">Register</Button>
        </Link>
      </Nav>
    );
  }
}

export default NavBar;
