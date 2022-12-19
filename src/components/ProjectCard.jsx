import React from "react";
import "./scss/projectCard.scss";

function ProjectCard({ name, image, pInfo, gitLog, webSite }) {
  return (
    <div>
      <div className="box-wrap">
        <h1 className="card-name">{name}</h1>
        <div className="card-wrap">
          <div className="image-box">
            <img src={`${image}`} alt="" />
          </div>
          <div className="project-link">
            <p>{pInfo}</p>
            <hr />
            <p>깃허브 주소 : {gitLog}</p>
            <p>웹사이트 링크</p>
            <p>사용한 스킬</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
