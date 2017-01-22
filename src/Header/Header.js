import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header id="Header"
              className="flex-container flex-layout-row flex-align-start-center">

        <div id="app-title">
          Nikhil Dev
        </div>

        <div id="social-icons"></div>

      </header>
    );
  }
}

export default Header;
