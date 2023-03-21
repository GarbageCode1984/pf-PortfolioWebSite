import React from "react";
import "./scss/project.scss";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import data from "../data.json";

function Project() {
    /* const itemList = items.map((id) => <ProjectCard items={id} />); */
    const itemList = data.items.map((id, key) => <ProjectCard items={id} key={key} />);
    return (
        <div id="project">
            <h1 className="projectTitle">PROJECT</h1>
            <Container className="project-wrap">
                <Row>
                    <Col>{itemList}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Project;
