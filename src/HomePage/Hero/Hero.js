import React, { useEffect } from "react";
import TextHandler from "../../TextHandler.js";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./Hero.css";

import { Link } from "react-router-dom";

function Hero() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let height = 3 - window.pageYOffset * 0.05;
    console.log(window.pageYOffset);
    console.log(height);
    if (window.pageYOffset > 110) {
      document.querySelector(".moon").style.right = height + "vw";
    } else {
      document.querySelector(".moon").style.right = height + "vw";
    }
  }

  return (
    <div className="hero">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
        className="moon"
      />
      <div className="hero_intro">
        <div>
          <a
            href="https://github.com/piyushsingh0992"
            className="social_media_handles"
          >
            <GitHubIcon style={{ fontSize: "3.5vw" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush0992/"
            className="social_media_handles"
          >
            <LinkedInIcon style={{ fontSize: "3.5vw" }} />
          </a>
        </div>

        <div className="hero_text">
          <TextHandler text="Hey ," />
          <TextHandler text="I am Piyush Singh" />
          <TextHandler text="A Full Stack Web developer" />
        </div>

        <div>

        <Link to="/Projects">
          <button className="hero_nav_btn primary">projects</button></Link>
        <Link to="/Blogs">  
          <button className="hero_nav_btn secondary">Blogs</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
