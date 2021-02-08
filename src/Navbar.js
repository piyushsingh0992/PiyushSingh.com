import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

function ProjectNav(props) {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (window.pageYOffset > 65) {
      document.querySelector(".navbar").style.backgroundColor =
        "rgba(0,0,0,0.6)";
    } else {
      document.querySelector(".navbar").style.backgroundColor = "transparent";
    }
  }
  let secondlink;
  let link;
  if (props.currentpage === "Project") {
    secondlink = "Blogs";
    link = "./Blogs";
  } else {
    secondlink = "Projects";
    link = "./Projects";
  }

  return (
    <div className="navbar">
      <div className="navbar_btns">
        <Link to="/">
          <h2>Home</h2>&nbsp;
        </Link>
        <Link to={link}>
          <h2>{secondlink}</h2>
        </Link>
      </div>
    </div>
  );
}

export default ProjectNav;
