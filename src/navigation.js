import React, { Component } from "react";
import "./navigation.css";
import $ from "jquery";

function pglinks() {
  var navHeight = Math.round($(".nav").height());

  $("nav")
    .find("a")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: 100
      }, 200);
    });
}

export default class Navigation extends Component {
  render() {
    return (
      <div id="nav">
        <h2 id="name">Jayce Jung</h2>
        <div id="navMain">
          <ul id="navList">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
