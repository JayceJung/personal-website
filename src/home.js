import React, { Component } from 'react';
import github from './image/github.svg';
import linkedin from './image/linkedin.svg';
import email from './image/mail.svg';
import resume from './image/resume.svg';
import './home.css';
import Fade from 'react-reveal/Flip'

export default class Home extends Component {
  render() {
    return(
      <div id="home">
        <div id="intro">
          <Fade top>
          <h1> Jayce Jung </h1>
          <h2> UNIVERSITY OF WATERLOO </h2>
          <h2> COMPUTER SCIENCE STUDENT </h2>
          </Fade>
        </div>
        <div id="links">
          <Fade bottom delay={200}>
          <ul id="linkList">
            <div className="column">
              <li><a href="https://github.com/JayceJung"><img className="icon" src={github} alt="github"/></a></li>
              <li><a href="https://www.linkedin.com/in/jayce-jung/"><img className="icon" src={linkedin} alt="linkedin"/></a></li>
            </div>
            <div className="column">
              <li><a><img className="icon" src={resume} alt="resume"/></a></li>
              <li><a href="mailto:jy4jung@uwaterloo.ca"><img className="icon" height="50px" src={email} alt="email"/></a></li>
            </div>
          </ul>
          </Fade>
        </div>
      </div>
    );
  }
}