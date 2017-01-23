import React, { Component } from 'react';

import './Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.skills = [
      {
        name: 'JavaScript',
        proficiency: 9
      },
      {
        name: 'Angular 1 & 2',
        proficiency: 9
      },
      {
        name: 'HTML',
        proficiency: 9
      },
      {
        name: 'CSS/SCSS/SASS',
        proficiency: 9
      },
      {
        name: 'REST',
        proficiency: 8
      },
      {
        name: 'AppEngine',
        proficiency: 8
      },
      {
        name: 'Sketch',
        proficiency: 8
      },
      {
        name: 'NodeJS',
        proficiency: 7
      },
      {
        name: 'Django',
        proficiency: 7
      },

      {
        name: 'Responsive Web Design',
        proficiency: 7
      },

      {
        name: 'Git',
        proficiency: 7
      },
      {
        name: 'Webpack',
        proficiency: 7
      },

      {
        name: 'Linux',
        proficiency: 7
      },
      {
        name: 'TypeScript',
        proficiency: 7
      },
      {
        name: 'Python',
        proficiency: 7
      },
      {
        name: 'MySql',
        proficiency: 6
      },
      {
        name: 'Firebase',
        proficiency: 6
      },
      {
        name: 'jQuery',
        proficiency: 6
      },
      {
        name: 'PHP',
        proficiency: 5
      },
      {
        name: 'MongoDB',
        proficiency: 5
      },
    ];
  }

  render() {
    return (
      <div id="skills"
           className="card flex-container flex-layout-column flex-align-start-start">

        <div className="card-title">
          Skills
        </div>

        <div className="card-content flex-container flex-layout-column">

          {
            this.skills.map((skill, index) => {
              return (
                <div key={index} className="skill flex-container flex-layout-column">
                  <label className="skill-name">{skill.name}</label>
                  <progress value={skill.proficiency} max="10"
                            className="skill-guage"></progress>
                </div>

              )
            })
          }



        </div>

      </div>
    );
  }
}

export default Skills;
