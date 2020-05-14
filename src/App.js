import React, { Component } from "react";

import Menu from "./components/Menu";
import Header from "./components/Header";
import Hi from "./components/Hi_";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Badge from "./components/Badge";
import Projects from "./components/Projects";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.StrictMode>
        <Menu/>
        <Header />
        <Hi/>
        <Resume/>
        <Skills/>
        <Badge/>
        <Projects/>
        
      </React.StrictMode>
    );
  }
}

export default App;
