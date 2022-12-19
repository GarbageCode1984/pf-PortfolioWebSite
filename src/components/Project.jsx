import React from "react";
import "./scss/project.scss";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
function Project() {
    return (
        <div id="project">
            <Container className="project-wrap">
                <Row>
                    <Col>
                        <ProjectCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Project;
