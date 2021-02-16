import Hero from "./Hero/Hero.js";

import TextHandler from "../TextHandler.js";
import ProjectCard from "../ProjectCard.js";
import BlogCard from "../BlogCard.js";

import { Link } from "react-router-dom";

import "./HomePage.css";
import {blogArray,projectArray} from "../infoArrays.js"
import "../grid.css";

export default function HomePge() {
  return (
    <div className="homePage">
      <Hero />
      <div className="projectSection">
        <TextHandler text="My projects" />

        <div className="project_grid">
        {projectArray?.map((project)=>{
          return <ProjectCard img={project.img} title={project.title}  techStack={project.techStack} demolink={project.demolink} codelink={project.codelink}/>
        })}
        </div>
        <Link to="/Projects">
          <button className="viewall_btn">View All Projects </button>
        </Link>
      </div>

      <div className="blogSection">
        <TextHandler text="My blogs" />

        <div className="blog_grid">
        {blogArray.slice(0,3).map(blog=>{
         return  <BlogCard title={blog.title} img={blog.img} intro={blog.intro} link={blog.link} />
        })}
        </div>
        <Link to="/Blogs">
          <button className="viewall_btn">View All blogs</button>
        </Link>
      </div>
    </div>
  );
}
