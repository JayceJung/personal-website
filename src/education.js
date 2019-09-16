import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import waterloo from './image/waterloo.png'
import './education.css';

export default class Education extends Component {
  render() {
    return(
      <div id="education">
        <Fade left delay={100}>
        <div id="waterlooIconDiv">
          <img src={waterloo} alt="waterloo" id="waterlooIcon"/>
        </div>
        </Fade>
        <Fade left delay={200}>
        <div id="educationInfo">
          <p id="class">
            Class of 2023
          </p>
          <br />
          <p id="candidate">
            Candidate for Bachelor of Computer Science
            <br />
            Department of Mathematics
          </p>
        </div>
        </Fade>
      </div>
    );
  }
}