import Hero from "./Hero/Hero.js";

import TextHandler from "../TextHandler.js";
import ProjectCard from "../ProjectCard.js";
import BlogCard from "../BlogCard.js";

import { Link } from "react-router-dom";

import "./HomePage.css";
import {blogArray} from "../infoArrays.js"
import "../grid.css";

export default function HomePge() {
  return (
    <div className="homePage">
      <Hero />
      <div className="projectSection">
        <TextHandler text="My projects" />

        <div className="project_grid">
          <ProjectCard img="./images/projects/covid-tracker.jpg" title="Amazone Clone" />
          <ProjectCard img="./images/projects/spotify.JPG" title="Corona tracker"/>
          <ProjectCard img="./images/projects/guitar.jpg" title="Virtual guitar" />
          <ProjectCard img="./images/projects/pokemon.jpg" title="Marvel Quiz" />
          <ProjectCard img="./images/projects/marvel.jpg" title="Spotify clone" />
          <ProjectCard img="./images/projects/anime.jpg" title="Pokemon Soundbox"/>
          <ProjectCard img="./images/projects/books.jpg" title="Pokemon Soundbox"/>
          <ProjectCard img="./images/projects/minion.jpg" title="Pokemon Soundbox"/>
          <ProjectCard img="./images/projects/groot.jpg" title="Pokemon Soundbox"/>
          <ProjectCard img="./images/projects/" title="Pokemon Soundbox"/>
          <ProjectCard img="./images/projects/" title="Pokemon Soundbox"/>
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
