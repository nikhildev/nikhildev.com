import React, { Component } from 'react';

import './SocialLinks.css';

class SocialLink extends Component {
  render() {
    return (
      <div id="social-links"
           className="flex-container flex-layout-row flex-align-end-center">
        <a href="https://twitter.com/_nikhildev" className="fa fa-twitter-square social-link"></a>
        <a href="https://github.com/nikhildev" className="fa fa-github-square social-link"></a>
        <a href="https://www.linkedin.com/in/nikhildev/" className="fa fa-linkedin-square social-link"></a>
        <a href="https://www.facebook.com/nikhildevchunchu" className="fa fa-facebook-square social-link"></a>
      </div>
    )
  }

}

export default SocialLink