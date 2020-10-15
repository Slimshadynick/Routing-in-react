import React from "react";
import { Component } from "react";
import Person from "./Person";
import { Container, Row } from "react-bootstrap";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleCards: [],
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((res) => res.json())
      .then((obj) => {
        for (let i = 0; i < Object.keys(obj).length; i++) {
          this.setState({
            peopleCards: [
              ...this.state.peopleCards,
              {
                name: obj[i].name,
                age: obj[i].age,
                eyes: obj[i].eye_color,
                hair: obj[i].hair_color,
                gender: obj[i].gender,
                id: obj[i].id
              },
            ],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let childCompo = this.state.peopleCards.map((obj, index) => {
      return (
        <Person
          name={obj.name}
          age={obj.age}
          eyes={obj.eyes}
          hair={obj.hair}
          gender={obj.gender}
          id={obj.id}
          key={index}
        />
      );
    });
    return (
      <Container fluid>
        <Row>{childCompo}</Row>
      </Container>
    );
  }
}

export default People;
