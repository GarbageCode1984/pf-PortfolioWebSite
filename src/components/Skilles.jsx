import React from "react";
import "./scss/skills.scss";

function Skilles() {
  return (
    <div className="skill_wrap">
      <span className="skill_sircle">
        <img src="/html.png" alt="html" />
        <p>HTML</p>
      </span>
      <span className="skill_sircle">
        <img src="/css.png" alt="css" />
        <p>CSS</p>
      </span>
      <span className="skill_sircle">
        <img src="/js.png" alt="js" />
        <p>JavaScript</p>
      </span>
      <span className="skill_sircle">
        <img src="/react.png" alt="react" />
        <p>React</p>
      </span>
      <span className="skill_sircle">
        <img src="/figma.png" alt="figma" />
        <p>Figma</p>
      </span>
      <span className="skill_sircle">
        <img src="/github.png" alt="github" />
        <p>Github</p>
      </span>
    </div>
  );
}

export default Skilles;
