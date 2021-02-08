import React from "react";
import TextHandler from "../TextHandler.js";
import ProjectNav from "../Navbar.js";
import ProjectCard from "../ProjectCard.js";
import "./ProjectPage.css";
import "../grid.css";

function ProjectPage() {
  return (
    <div className="projectpage">
      <ProjectNav currentpage="Project" />
      <div className="heading">
        <TextHandler text="My projects" />
      </div>

      <div className="project_grid">
        <ProjectCard img="./images/amazon-clone.JPG" title="Amazone Clone" />
        <ProjectCard img="./images/corona-tracker.JPG" title="Corona tracker" />
        <ProjectCard img="./images/guitar.JPG" title="Virtual guitar" />
        <ProjectCard img="./images/marvel-quiz.JPG" title="Marvel Quiz" />
        <ProjectCard
          img="./images/pokemon-soundbox.JPG"
          title="Pokemon Soundbox"
        />
        <ProjectCard img="./images/spotify-clone.JPG" title="Spotify clone" />
      </div>
    </div>
  );
}

export default ProjectPage;
