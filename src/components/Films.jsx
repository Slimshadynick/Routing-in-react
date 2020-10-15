import React from "react";
import { Component } from "react";
import FilmCard from "./FilmCard.jsx";
import { Container, Row } from "react-bootstrap";

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmCards: [],
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((obj) => {
        for (let i = 0; i < Object.keys(obj).length; i++) {
          this.setState({
            filmCards: [
              ...this.state.filmCards,
              {
                title: obj[i].title,
                desc: obj[i].description,
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
    let childCompo = this.state.filmCards.map((obj, index) => {
      return <FilmCard title={obj.title} desc={obj.desc} id={obj.id} key={index} />;
    });
    return (
      <Container fluid>
        <Row>{childCompo}</Row>
      </Container>
    );
  }
}

export default Films;
