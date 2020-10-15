import React from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';


class Person extends Component {
  render() {
    return (
      <Card style={{ width: "30%" }} bg="light">
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{`${this.props.name} is ${this.props.age} ${this.props.gender} with ${this.props.hair} hair and ${this.props.eyes} eyes.`}</Card.Text>
          <Link to={`/people/${this.props.id}`} className='btn btn-primary'>View Details</Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Person;