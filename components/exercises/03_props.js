import React , { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'

export default class CourseModulesWithProps extends Component { 
    render() {
        const thName = "Name";
        const thLectures = "No. Lectures"
        const thPracticals = "No. Practicals"
        return (
            <div>
              <h1>{this.props.course}</h1>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>{thName}</th>
                    <th>{thLectures}</th>
                    <th>{thPracticals}</th>
                  </tr>
                </thead>
                <tbody >
                <tr>
                <td>{this.props.modules[0].name}</td>
                <td>{this.props.modules[0].noLectures}</td>
                <td>{this.props.modules[0].noPracticals}</td>
                </tr>
                <tr>
                <td>{this.props.modules[1].name}</td>
                <td>{this.props.modules[1].noLectures}</td>
                <td>{this.props.modules[1].noPracticals}</td>
                </tr>
                </tbody>
              </Table>
            </div>
          );
    }
}