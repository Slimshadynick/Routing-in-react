import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import { Component } from "react";
import FilmDetail from './FilmDetail';
import PersonDetail from './PersonDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Link to={"/"} className="btn btn-primary">
            Go Home!
          </Link>
          <Link to={"/films"} className="btn btn-primary">View Films!</Link>
          <Link to={"/people"} className="btn btn-primary">View people!</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route path="/films/:id" component={FilmDetail}/>
            <Route path="/people/:id" component={PersonDetail} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
