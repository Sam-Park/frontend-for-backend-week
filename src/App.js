import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
import { Row, Col, Card, Container, Button } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";

import EditNote from "./Components/EditNote";
import NoteCard from "./Components/NoteCard";
import NavBar from "./Components/NavBar";
import NoteList from "./Components/NoteList";
import NewNote from "./Components/NewNote";
import Note from "./Components/Note";
import Home from './Components/Home';
import SignUp from './Components/signup';
import SignIn from './Components/SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log("AppState", this.state.notes);

    return (
      <div>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth/login" component={SignIn} />
          <Route path="/auth/register" component={SignUp} />
          <Route exact path="/notes" component={NoteList} />
          <Route path="/note/:id" component={Note} />
          <Route exact path="/edit/:id" component={EditNote} />
          <Route path="/notes/:id" component={NoteCard} />; }} />
          <Route
            path="/NewNote"
            render={props => {
              return <NewNote {...props} notes={this.state.notes} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
