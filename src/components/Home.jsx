import React from "react";
import {Component} from "react";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Studio Ghibli!</h1>
        <img src={require("../assets/logo.png")} alt="Logo"></img>
      </React.Fragment>
    );
  }
}

export default Home;
