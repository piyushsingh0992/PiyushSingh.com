import React from "react";

import "./BlogCard.css";

export default function BlogCard(props) {
  return (
    <a href={props.link} className="blogCard" target="_blank">
      <img className="blogCard_img" src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.intro ?props.intro.slice(1,90):props.intro}</p>
    </a>
  );
}
