import React, { Component } from "react";
import towerdefense from "./image/towerdefense.svg";
import todos from "./image/todos.svg";
import androidapp from "./image/android.svg";
import processing from "./image/processing.png";
import java from "./image/java.svg";
import css from './image/css.svg';
import html from './image/html.svg';
import react from './image/react.svg';
import kotlin from './image/kotlin.svg';
import selenium from './image/selenium.svg';
import "./project.css";
import Fade from 'react-reveal/Fade';

export default class Project extends Component {
  render() {
    return (
      <div id="project">
        <Fade left delay={100}>
          <h1>My Projects</h1>
        </Fade>
        <Fade left delay={100}>
        <div id="towerDefense">
          <div id="projectLeft1">
            <a href="https://github.com/JayceJung/TowerDefense"><img className="projectIcon" src={towerdefense} /></a>
          </div>
          <h1> Tower Defense Game </h1>
          <p className="madeWith">
            Made with: 
          </p>
            <img src={processing} alt="processing" className="projectLanguage" />
            <img src={java} alt="java" className="projectLanguage" />
            <br />
          <p className="exp">
            Classic tower defense game.
            <br />
            Implemented using concept of <b>Object Oriented Programming</b> and <b>inheritance</b> to the tower objects
          </p>
        </div>
        </Fade>
        <Fade left delay={100}>
        <div id="dailyPlanner">
          <div id="projectLeft2">
            <a href="https://github.com/JayceJung/planner"><img className="projectIcon" src={todos} /></a>
          </div>
          <h1> Daily Planner </h1>
          <p className="madeWith">
            Made with:   
          </p>
            <img src={react} alt="react" className="projectLanguage" />
            <img src={html} alt="html" className="projectLanguage" />
            <img src={css} alt="css" className="projectLanguage" />
            <br />
          <p className="exp">
            Simple daily taskbar with features such as delete, complete, and restarting the list
            <br />
            Stores the data in the Browser of the user using localStorage such that the data stays after the site refreshes
          </p>
        </div>
        </Fade>
        <Fade left delay={100}>
        <div id="toDoApp">
          <div id="projectLeft3">
            <img className="projectIcon" src={androidapp} />
          </div>
          <h1> Schedule App using web crawling (Work in Progress)</h1>
          <p className="madeWith"> 
            Making with:
          </p>
            <img src={java} alt="java" className="projectLanguage" />
            <img src={kotlin} alt="kotlin" className="projectLanguage" />
            <img src={selenium} alt="selenium" className="projectLanguage" />
            <br />
          <p className="exp">
            Schedule Android app using web scrapping
            <br />
            Retrieves data from University of Waterloo's portal and shows the upcoming assignments and tasks.
          </p>
        </div>
        <div id="viewCode">
          <p>Click on the icon to view the code</p>
        </div>
        </Fade>
      </div>
    );
  }
}
