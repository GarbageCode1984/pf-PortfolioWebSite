import React from "react";
import "./scss/project.scss";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
function Project() {
  const info = {
    webSite: [" https://garbagecode1984.github.io/pf-onestore/"],
  };

  return (
    <div id="project">
      <Container className="project-wrap">
        <Row>
          <Col>
            <ProjectCard
              name="원스토어"
              image={`/project1.png`}
              info={{ info }}
              pInfo="클론코딩 웹사이트 반응형 웹"
              gitLog="https://github.com/GarbageCode1984/pf-onestore"
              webSite=" https://garbagecode1984.github.io/pf-onestore/"
              skilles="HTML, CSS, Jquery"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
