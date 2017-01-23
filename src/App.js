import React, { Component } from 'react';

import Header from './Header/Header';
import Skills from './Skills/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App flex-container flex-layout-column">
        <Header />
        <div id="content" className="flex-container">
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
