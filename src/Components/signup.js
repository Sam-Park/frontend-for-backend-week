import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { InputGroup, Input, Col, Button, Container } from "reactstrap";
import axios from "axios";
import NavBar from './NavBar'

class SignUp extends Component {
  constructor(props) {
    super(props);
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

 

  registerUser = () => {
    axios
      .post("https://floating-reaches-71125.herokuapp.com/api/auth/register", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        if (res.status === 201) {
          this.setState({ redirect: true });
        }
        console.log("success!, you have been registered!", res);
      })
      .catch(error => {
        console.log("Error", error);
      });
    this.setState({ username: "", password: "" });
  };

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavBar />
        <Container style={{ maxWidth: "1500px" }}>
          <InputGroup
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Col sm="3">
              <Input
                style={{
                  margin: "10px",
                  boxShadow: "2px 2px 4px"
                }}
                placeholder="username"
                type="text"
                onChange={this.handleUsername}
                value={this.state.username}
              />
            </Col>
            <Col sm="3">
              <Input
                style={{
                  margin: "10px",
                  boxShadow: "2px 2px 4px"
                }}
                placeholder="password"
                type="password"
                onChange={this.handlePass}
                value={this.state.password}
              />
            </Col>
            <Button
              color="danger"
              onClick={this.registerUser}
              style={{
                marginTop: "10px",
                boxShadow: "2px 2px 4px rgb(73, 80, 87)"
              }}
            >
              Submit
            </Button>
          </InputGroup>
        </Container>
      </div>
    );
  }
}

export default SignUp;
