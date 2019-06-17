import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
/*
Imporing table from bootstrap fr some style
*/
import Table from 'react-bootstrap/Table'

export default class CourseModulesStatic extends Component {
  render() {
    return (
      <div>
        <h1>HDip Computer Science - Modules table</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>No lectures</th>
              <th>No practicals</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>DevOps</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Enterprise Web Dev</td>
              <td>3</td>
              <td>2</td>
            </tr>
          </tbody >
        </Table>
      </div>
    );

  }
}
