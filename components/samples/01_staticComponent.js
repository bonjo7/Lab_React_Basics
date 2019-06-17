import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

export default class StaticComponent extends Component {
  render() {
    return (
      <div className="myCSSstyle">
        <h1>Dynamic Languages</h1>
        <ListGroup>
        <ListGroup.Item>Python</ListGroup.Item>
        <ListGroup.Item>Javascript</ListGroup.Item>
        <ListGroup.Item>Ruby</ListGroup.Item>
        <ListGroup.Item>PHP</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
