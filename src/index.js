import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./header";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import "./main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
