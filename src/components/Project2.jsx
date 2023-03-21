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
      skilles: ["HTML CSS JS"],
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
    {
      mainImage: ["/project6.PNG"],
      name: ["Phone Book"],
      hash: ["#반응형 #연락처"],
      skilles: ["React, Redux"],
      res: ["https://github.com/GarbageCode1984/pf-React-phoneBook"],
      webLink: ["https://phonebook1984.netlify.app/"],
    },
    {
      mainImage: ["/project7.PNG"],
      name: ["TodoList"],
      hash: ["#TodoList"],
      skilles: ["React"],
      res: ["https://github.com/GarbageCode1984/pf-React-Todo"],
      webLink: ["https://todolist1984.netlify.app/"],
    },
    {
      mainImage: ["/project8.PNG"],
      name: ["TodoList"],
      hash: ["#TodoList"],
      skilles: ["Vue"],
      res: ["https://github.com/GarbageCode1984/pf-Vue-TodoList"],
      webLink: ["https://vue-todolist1984.netlify.app/"],
    },
    {
      mainImage: ["/project9.PNG"],
      name: ["카카오톡"],
      hash: ["#모바일 #반응형 #웹 앱"],
      skilles: ["HTML, SCSS, JS"],
      res: ["https://github.com/GarbageCode1984/pf-kakaoApp"],
      webLink: ["https://garbagecode1984.github.io/pf-kakaoApp/"],
    },
    {
      mainImage: ["/project10.PNG"],
      name: ["Video Play Site"],
      hash: ["#비디오플레이어"],
      skilles: ["HTML, CSS, JS"],
      res: ["https://github.com/GarbageCode1984/pf-flexVideo"],
      webLink: ["https://garbagecode1984.github.io/pf-flexVideo/"],
    },
    {
      mainImage: ["/project11.PNG"],
      name: ["60seconds"],
      hash: ["#bootstrap #반응형"],
      skilles: ["HTML, CSS"],
      res: ["https://github.com/GarbageCode1984/pf-60seconds"],
      webLink: ["https://garbagecode1984.github.io/pf-60seconds/"],
    },
    {
      mainImage: ["/project12.PNG"],
      name: ["tire_tech"],
      hash: ["#반응형"],
      skilles: ["HTML, CSS, JS"],
      res: ["https://github.com/GarbageCode1984/pf-tire_tech"],
      webLink: ["https://garbagecode1984.github.io/pf-tire_tech/"],
    },
    {
      mainImage: ["/project13.PNG"],
      name: ["H&B"],
      hash: ["#쇼핑몰 #반응형"],
      skilles: ["React, SCSS"],
      res: ["https://github.com/GarbageCode1984/pf-React-HNM"],
      webLink: ["https://hnm1984.netlify.app/"],
    },
  ];

  const itemList = items.map((index) => <ProjectCard items={index} />);

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
