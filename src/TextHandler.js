import React from "react";
import "./TextHandler.css";

function TextHandler(props) {
  let alphabetArray = props.text.split("");

  function enter(event) {
    event.target.classList.add("alphabet_hover");
    event.target.classList.remove("alphabet");
  }

  function leave(event) {
    event.target.classList.remove("alphabet_hover");
    event.target.classList.add("alphabet");
  }

  return (
    <h1 className="TextHandler">
      {alphabetArray.map((alphabet, index) => {
        return (
          <span
            key={index}
            className="alphabet"
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            {alphabet}
          </span>
        );
      })}
    </h1>
  );
}

export default TextHandler;
