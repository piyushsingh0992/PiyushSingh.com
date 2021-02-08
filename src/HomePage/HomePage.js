import Hero from "./Hero/Hero.js";

import TextHandler from "../TextHandler.js";
import ProjectCard from "../ProjectCard.js";
import BlogCard from "../BlogCard.js";

import { Link } from "react-router-dom";

import "./HomePage.css";

import "../grid.css";

export default function HomePge() {
  return (
    <div className="homePage">
      <Hero />
      <div className="projectSection">
        <TextHandler text="My projects" />

        <div className="project_grid">
          <ProjectCard img="./images/amazon-clone.JPG" title="Amazone Clone" />
          <ProjectCard
            img="./images/corona-tracker.JPG"
            title="Corona tracker"
          />
          <ProjectCard img="./images/guitar.JPG" title="Virtual guitar" />
          <ProjectCard img="./images/marvel-quiz.JPG" title="Marvel Quiz" />
          <ProjectCard
            img="./images/pokemon-soundbox.JPG"
            title="Pokemon Soundbox"
          />
          <ProjectCard img="./images/spotify-clone.JPG" title="Spotify clone" />
        </div>
        <Link to="/Projects">
          <button className="viewall_btn">View All Projects </button>
        </Link>
      </div>

      <div className="blogSection">
        <TextHandler text="My blogs" />

        <div className="blog_grid">
          <BlogCard title="what is curl ?" img="./images/curl.png" />
          <BlogCard title="what is curl ?" img="./images/curl.png" />
          <BlogCard title="what is curl ?" img="./images/curl.png" />
        </div>
        <Link to="/Blogs">
          <button className="viewall_btn">View All blogs</button>
        </Link>
      </div>
    </div>
  );
}
