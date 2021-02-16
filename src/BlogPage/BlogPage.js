import React from "react";
import TextHandler from "../TextHandler.js";
import Navbar from "../Navbar.js";
import BlogCard from "../BlogCard.js";
import {blogArray} from "../infoArrays.js"
import "./BlogPage.css";
import "../grid.css";

console.log()
function ProjectPage() {
  return (
    <div className="projectpage">
      <Navbar />
      <div className="heading">
        <TextHandler text="My Blogs" />
      </div>

      <div className="blog_grid">
        {blogArray.map(blog=>{
         return  <BlogCard title={blog.title} img={blog.img} intro={blog.intro} link={blog.link} />
        })}
        
      </div>
    </div>
  );
}

export default ProjectPage;
