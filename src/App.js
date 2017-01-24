import React, { Component } from 'react';

import Header from './Header/Header';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import Resume from './Resume/Resume';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App flex-container flex-layout-column">
        <Header />
        <div id="content" className="flex-container flex-layout-row flex-align-start-start">
          <AboutMe />
          <Skills />
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
