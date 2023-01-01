import React from "react";
import "./scss/project.scss";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
function Project() {
    const items = [
        {
            mainImage: ["/project1.PNG"],
            name: ["원스토어"],
            hash: ["#반응형웹"],
            skilles: ["HTML CSS jQuery"],
            res: ["https://github.com/GarbageCode1984/pf-onestore"],
            webLink: ["https://garbagecode1984.github.io/pf-onestore/"],
        },
        {
            mainImage: ["/project2.PNG"],
            name: ["CaffeApp"],
            hash: ["#웹 앱 #모바일"],
            skilles: ["HTML CSS JS SCSS"],
            res: ["https://github.com/GarbageCode1984/pf-CaffeApp"],
            webLink: ["https://garbagecode1984.github.io/pf-CaffeApp/#"],
        },
        {
            mainImage: ["/project3.PNG"],
            name: ["포트폴리오 웹사이트"],
            hash: ["#포트폴리오"],
            skilles: ["React SCSS bootstrap"],
            res: ["https://github.com/GarbageCode1984/pf-PortfolioWebSite"],
            webLink: [""],
        },
        {
            mainImage: ["/project4.PNG"],
            name: ["빙그레"],
            hash: ["#반응형"],
            skilles: ["HTML, CSS"],
            res: ["https://github.com/GarbageCode1984/pf-bing"],
            webLink: ["https://garbagecode1984.github.io/pf-bing/"],
        },
        {
            mainImage: ["/project5.PNG"],
            name: ["Pinterest"],
            hash: ["#반응형"],
            skilles: ["HTML, CSS, JS, SCSS"],
            res: ["https://github.com/GarbageCode1984/pf-Pinterest"],
            webLink: ["https://garbagecode1984.github.io/pf-Pinterest/"],
        },
    ];

    const itemList = items.map((index) => <ProjectCard items={index} />);

    return (
        <div id="project">
            <Container className="project-wrap">
                <Row>
                    <Col>{itemList}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Project;
