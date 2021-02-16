import React from "react";

import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
    <img
        alt="project screenshot"
        className="projectCard_img"
        src={props.img}
      />
    </div>
    <div className="flip-box-back">
    <h1>{props.title}</h1>
    <p>dsddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddsadas</p>
    <p><strong>Techstack : </strong>HTML,CSS,Javascript,Reactjs,spotify-web-api-js</p>
        <div className="projectCard_btns">
          <a
            className="demo_button"
            href="https://discord.com/channels/713418735532114034/713453224648245313"
          >
            Live Demo
          </a>
          <a
            className="code_button"
            href="https://discord.com/channels/713418735532114034/713453224648245313"
          >
            source code
          </a>
        </div>
    </div>
  </div>
</div>
  );
}
