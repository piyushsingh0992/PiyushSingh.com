import React from "react";
import TextHandler from "../TextHandler.js";
import ProjectNav from "../Navbar.js";
import ProjectCard from "../ProjectCard.js";
import "./ProjectPage.css";
import "../grid.css";
import {projectArray} from "../infoArrays.js";
function ProjectPage() {
  console.log("projectArray -> ",projectArray)
  return (
    <div className="projectpage">
      <ProjectNav currentpage="Project" />
      <div className="heading">
        <TextHandler text="My projects" />
      </div>

      <div className="project_grid">
        {projectArray.map((project)=>{
          return <ProjectCard img={project.img} title={project.title} demolink={project.demolink} codelink={project.codelink} techStack={project.techStack}/>
        })}


      </div>
    </div>
  );
}

export default ProjectPage;
