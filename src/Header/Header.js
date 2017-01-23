import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header id="Header"
              className="flex-container flex-layout-row flex-align-start-center">

        <div id="app-title"
             className="flex-container flex-layout-column flex-align-start-start">
          <span id="my-name">Nikhil Dev</span>
          <span id="designation">
            Frontend Engineer
          </span>
        </div>

        <div id="social-icons"></div>

      </header>
    );
  }
}

export default Header;
