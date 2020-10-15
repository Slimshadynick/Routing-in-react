import React from "react";
import { Component } from "react";
import {Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

class FilmCard extends Component {
  render() {
    return (
      <Card style={{ width: "30%" }} bg="light">
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <Link to={`/films/${this.props.id}`} className='btn btn-primary'>View Details</Link>
        </Card.Body>
      </Card>
    );
  }
}

export default FilmCard;
