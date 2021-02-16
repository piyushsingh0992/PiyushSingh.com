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
    <div>
    <p><strong>Techstack : </strong></p>
    <p>{props.techStack}</p>
    </div>
        <div className="projectCard_btns">
          <a
            className="demo_button"
            href={props.demolink} 
            target="_blank"
          >
            Live Demo
          </a>
          <a
            className="code_button"
            href={props.codelink}
            target="_blank"
          >
            source code
          </a>
        </div>
    </div>
  </div>
</div>
  );
}
