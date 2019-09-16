import React from "react";
import Navigation from "./navigation.js";
import Home from "./home.js";
import About from "./about.js";
import Project from "./project.js";
import Education from "./education.js";
import Footer from "./footer.js";
import "./App.css";
import "./reset.css";

export default function App() {
  return (
    <div id="main">
      <Navigation />
      <Home />
      <About />
      <Project />
      <Education />
      <Footer />
    </div>
  );
}
