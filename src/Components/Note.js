import React, { Component } from "react";
import NoteCard from "./NoteCard";
import axios from 'axios';
import { Col, Row, Container, Input, Card, CardTitle, CardBody, CardHeader } from "reactstrap";
import NavBar from "./NavBar";
import "./NoteCss.css";
import { Link } from "react-router-dom";
import DeleteModal from "./deleteModal";

class Note extends Component {
  constructor() {
    super();
    this.state = {
      note: {},
      completed: ""
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id
    axios.get(`https://floating-reaches-71125.herokuapp.com/api/notes/${id}`)
    .then(response => {
      this.setState(() => ({ note: response.data }))
      console.log(this.state.note)
    })
  }

  completeHandler = () => {
    if (this.state.completed === "") {
      this.setState({ completed: "line-through" })
    }
    else if (this.state.completed === "line-through") {
        this.setState({ completed: "" })
    }
  };
  render() {
    console.log("note props", this.props)
    return (
      <Container className="mainContainer" style={{ display: "flex" }}>
        <Col sm="3" className="navCol">
          <NavBar className="navBar" />
        </Col>
        {/* EndNav */}
        <Container className="notesContainer">
          <br />
          <Row style={{ display: "flex" }}>
            <Link className="editLink" note={this.props} to={`/edit/${this.state.note._id}`}>
              edit
            </Link>
            <DeleteModal note={this.state.note} props={this.props} history={this.props.history}/>
          </Row>
          <button className="STbutton">
          <Card className="noteCardSingle" onClick={this.completeHandler}>
            <CardHeader>
          <CardTitle className="noteP" style={{ textDecoration: `${this.state.completed}`,  textAlign: "center",}} >
            {/* <Input
              type="checkbox"
              onClick={this.completeHandler}
              style={{ marginTop: "12px",  }}
              /> */}
              {this.state.note.title}
          </CardTitle>
              </CardHeader>
          <CardBody>
          <p className="noteP" style={{ textDecoration: `${this.state.completed}`, textAlign: "center", }} >
            {this.state.note.content}
          </p>
          </CardBody>
          </Card>
          </button>
        </Container>
      </Container>
    );
  }
}

export default Note;
