import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

export default class CourseModulesCollections extends Component {
    render() {

        let result = this.props.modules.map((listModules, index) => {
            return (
                <tr key={index}>
                    <td>{listModules.name}</td>
                    <td>{listModules.noLectures}</td>
                    <td>{listModules.noPracticals}</td>
                </tr>
            );
        });
        return (
            <div>
                <h1>{this.props.course} </h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>No. Lectures</th>
                            <th>No. Practicals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result}
                    </tbody>
                </Table>
            </div>
        );
    }
}