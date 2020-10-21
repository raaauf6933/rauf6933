import React, { Component } from "react";

import Menu from "./components/Menu";
import Header from "./components/Header";
import Hi from "./components/Hi_";
import About from "./components/About";
//import Skills from "./components/Skills";
import Badge from "./components/Badge";
import Projects from "./components/Projects";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header />
        <Hi />
        <About />
        <Badge />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
