import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { InputGroup, Input, Col, Button, Container, Row, Form } from "reactstrap";
import axios from "axios";
import NavBar from './NavBar';
import "./NoteCss.css";

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
      .post("https://floating-reaches-71125.herokuapp.com/api/register", {
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
      return <Redirect to="/notes" />;
    }
    return (
      <div>
        <Container className="mainContainer" style={{ display: "flex" }}>
        <Col sm="3" className="navCol">
          <NavBar className="navBar" />
        </Col>
        <Container className="inputContainer">
        <Row style={{ justifyContent: 'center'}} >
          <h1>Register</h1>
          </Row>
        <Form onSubmit={this.logInUser}>
          <InputGroup
   
   style={{
     marginTop: "15px",
     display: "flex",
     justifyContent: "center",
     alignItems: 'center',
     flexDirection: "column"
            }}
            >
            <Col sm="6">
              <Input
              style={{ marginBottom: "20px"}}
                placeholder="username"
                type="text"
                onChange={this.handleUsername}
                value={this.state.username}
                />
            </Col>
            <Col sm="6">
              <Input
                placeholder="password"
                type="password"
                onChange={this.handlePass}
                value={this.state.password}
                />
            </Col>
            <Button style={{ marginTop: '20px'}}color="danger" type="submit">
              Submit
            </Button>
            
           
          </InputGroup>
          </Form>
          <br />
              </Container>
            </Container>
      </div>
    );
  }
}

export default SignUp;
