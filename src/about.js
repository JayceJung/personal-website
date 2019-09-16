import React, {Component} from 'react';
import c from './image/c.svg';
import cpp from './image/cpp.svg';
import css from './image/css.svg';
import git from './image/git.svg';
import html from './image/html.svg';
import java from './image/java.svg';
import javascript from './image/javascript.svg';
import processing from './image/processing.png';
import racket from './image/racket.svg';
import react from './image/react.svg';
import Fade from 'react-reveal/Fade';
import './about.css'

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div id="languageIcons">
        <Fade left delay={200}>
          <h1> Languages and Frameworks</h1>
        </Fade>
          <ul id="languageList">             
          <Fade left delay={300}>
            <div className="row">
              <li><img src={c} alt="C" className="lanIcon"/></li>
              <li><img src={cpp} alt="CPP" className="lanIcon"/></li>
              <li><img src={css} alt="CSS" className="lanIcon"/></li>
              <li><img src={git} alt="GIT" className="lanIcon"/></li>
              <li><img src={html} alt="HTML" className="lanIcon"/></li>
            </div>
          </Fade>
          <Fade left delay={400}>
            <div className="row">
              <li><img src={java} alt="JAVA" className="lanIcon"/></li>
              <li><img src={javascript} alt="JAVASCRIPT" className="lanIcon"/></li>
              <li><img src={processing} alt="PROCESSING" className="lanIcon"/></li>
              <li><img src={racket} alt="RACKET" className="lanIcon"/></li>
              <li><img src={react} alt="REACT" className="lanIcon"/></li>
            </div>
          </Fade>
          </ul>
        </div>
        <div id="aboutMe">
          <Fade right delay={200}>
            <h2>About me</h2>
          </Fade>
          <Fade right delay={300}>
            <p>Hello, my name is Jayce Jung. I am currently enrolled in second-year Computer Science in University of Waterloo. I have been coding for 3 years now and I really enjoy developing front-end. Currently I am learning ReactJS and Python.</p>
            <p>I am also interested in learning back-end development. During my spare time, I enjoy playing video games and listening to music. </p>
          </Fade>
        </div>
      </div>
    );
  }
}
