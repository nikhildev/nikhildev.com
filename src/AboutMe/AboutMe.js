import React, { Component } from 'react';

import './AboutMe.css';

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about-me"
           className="card flex-container flex-layout-column flex-align-start-start">

        <div className="card-title">
          About Me
        </div>

        <div className="card-content flex-container flex-layout-column">
          Hello, my name is Nikhil.

          I'm a 33 year old Frontend Engineer from Hyderabad, India.
          I love building cool stuff in JavaScript all day long.
          I also love photography, weight training and playing the guitar.
        </div>

      </div>
    );
  }
}

export default AboutMe;
