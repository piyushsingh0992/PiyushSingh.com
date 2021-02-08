import React from "react";

import "./BlogCard.css";

export default function BlogCard(props) {
  return (
    <a href="" className="blogCard">
      <img className="blogCard_img" src={props.img} />
      <h1>{props.title}</h1>
      <p>checking</p>
    </a>
  );
}
