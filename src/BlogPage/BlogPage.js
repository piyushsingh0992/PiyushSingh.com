import React from "react";
import TextHandler from "../TextHandler.js";
import Navbar from "../Navbar.js";
import BlogCard from "../BlogCard.js";

import "./BlogPage.css";
import "../grid.css";

function ProjectPage() {
  return (
    <div className="projectpage">
      <Navbar />
      <div className="heading">
        <TextHandler text="My Blogs" />
      </div>

      <div className="blog_grid">
        <BlogCard title="what is curl ?" img="./images/curl.png" />
        <BlogCard title="what is curl ?" img="./images/curl.png" />
        <BlogCard title="what is curl ?" img="./images/curl.png" />

        <BlogCard title="what is curl ?" img="./images/curl.png" />
        <BlogCard title="what is curl ?" img="./images/curl.png" />
        <BlogCard title="what is curl ?" img="./images/curl.png" />
      </div>
    </div>
  );
}

export default ProjectPage;
