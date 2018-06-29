import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import {
  Input,
  InputGroup,
  Button,
  Col,
  Form,
  Container,
  Row
} from "reactstrap";
import NavBar from "./NavBar";
import "./NoteCss.css";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePass = e => {
    this.setState({ password: e.target.value });
  };

  logInUser = event => {
    event.preventDefault();
    axios
      .post("https://floating-reaches-71125.herokuapp.com/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.history.push("/notes");
        console.log("success!, you have been logged in!", res);
      })
      .catch(error => {
        console.log("Error", error.message);
      });
    this.setState({ username: "", password: "" });
  };

  render() {
    console.log("props:", this.props);
    return (
      <div>
        <Container className="mainContainer" style={{ display: "flex" }}>
          <Col sm="3" className="navCol">
            <NavBar className="navBar" />
          </Col>
          <Container className="inputContainer">
            <Row style={{ justifyContent: "center" }}>
              <h1>Log In</h1>
            </Row>
            <Form onSubmit={this.logInUser}>
              <InputGroup
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Col sm="6">
                  <Input
                    style={{ marginBottom: "20px" }}
                    placeholder="username"
                    type="text"
                    onChange={this.handleUsername}
                    value={this.state.username}
                  />
                </Col>
                <Col sm="6">
                  <Input
                  style={{ marginBottom: "20px" }}
                    placeholder="password"
                    type="password"
                    onChange={this.handlePass}
                    value={this.state.password}
                  />
                </Col>
                <Button
                  className="button"
                  type="submit"
                >
                  Submit
                </Button>
              </InputGroup>
            </Form>
            <br />
            <Link
              style={{ alignSelf: "center", textDecoration: "underline" }}
              to={"/register"}
            >
              Don't have an account? Register Here{" "}
            </Link>
          </Container>
        </Container>
      </div>
    );
  }
}

export default SignIn;
