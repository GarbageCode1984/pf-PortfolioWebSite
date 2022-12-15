import React from "react";
import "./scss/projectCard.scss";

function ProjectCard() {
  return (
    <div>
      <h1 className="card-name">프로젝트 이름</h1>
      <div className="card-wrap">
        <div className="image-box">
          <img src="https://via.placeholder.com/300" alt="" />
        </div>
        <div className="project-link">
          <p>포트폴리오 설명</p>
          <hr />
          <p>깃허브 주소</p>
          <p>웹사이트 링크</p>
          <p>사용한 스킬</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
