import React , { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'

export default class CourseModulesEmbeddedVars extends Component { 
    render() {
        const courseTile = "HDip Computer Science - Modules table.";
        const thName = "Name";
        const thLectures = "No. Lectures"
        const thPracticals = "No. Practicals"
        const modules = [
        {
            name: "DevOps",
            noLectures: 2,
            noPracticals: 2
        },
        {
            name: "Enterprise Web Dev",
            noLectures: 3,
            noPracticals: 2
        },
        {
            name: "Database Systems",
            noLectures: 2,
            noPracticals: 2
          },
          {
            name: "Enterprise Web Dev",
            noLectures: 2,
            noPracticals: 3
          }
        ];
        return (
            <div>
              <h1>{courseTile}</h1>
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
                <td>{modules[0].name}</td>
                <td>{modules[0].noLectures}</td>
                <td>{modules[0].noPracticals}</td>
                </tr>
                <tr>
                <td>{modules[1].name}</td>
                <td>{modules[1].noLectures}</td>
                <td>{modules[1].noPracticals}</td>
                </tr>
                <tr>
                <td>{modules[2].name}</td>
                <td>{modules[2].noLectures}</td>
                <td>{modules[2].noPracticals}</td>
                </tr>
                <tr>
                <td>{modules[3].name}</td>
                <td>{modules[3].noLectures}</td>
                <td>{modules[3].noPracticals}</td>
                </tr>
                </tbody >
              </Table>
            </div>
          );
      
        }
}