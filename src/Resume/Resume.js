import React, { Component } from 'react';

import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div id="resume"
           className="card flex-container flex-layout-column flex-align-start-start">
        <div className="card-title">Resume</div>
        <div className="card-content flex-container flex-layout-row flex-align-center-center">
          <a id="download-resume"
             className="flex"
             href="https://drive.google.com/file/d/0B6cVF2FGXeSkNF8ycmZJOUg5Qmc/view">
            Download
          </a>
        </div>
      </div>
    )
  }

}

export default Resume;