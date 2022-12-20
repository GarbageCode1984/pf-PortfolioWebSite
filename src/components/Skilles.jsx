import React from "react";
import "./scss/skilles.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skilles() {
  return (
    <Container fluid>
      <div className="skill_wrap" id="skilles">
        <Row xl={12} sm={6}>
          <Col xl={3} sm={4} style={{ paddingBottom: 50 }}>
            <span className="skill_sircle">
              <img src="/html.png" alt="html" />
              <p>HTML</p>
            </span>
          </Col>
          <Col xl={3} sm={4}>
            <span className="skill_sircle">
              <img src="/css.png" alt="css" />
              <p>CSS</p>
            </span>
          </Col>
          <Col xl={3} sm={4}>
            <span className="skill_sircle">
              <img src="/js.png" alt="js" />
              <p>JavaScript</p>
            </span>
          </Col>
          <Col xl={3} sm={4} style={{ paddingBottom: 50 }}>
            <span className="skill_sircle">
              <img src="/sass.png" alt="sass" />
              <p>sass</p>
            </span>
          </Col>
          <Col xl={3} sm={4}>
            <span className="skill_sircle">
              <img src="/react.png" alt="react" />
              <p>React</p>
            </span>
          </Col>
          <Col xl={3} sm={4}>
            <span className="skill_sircle">
              <img src="/figma.png" alt="figma" />
              <p>Figma</p>
            </span>
          </Col>
          <Col xl={3} sm={4}>
            <span className="skill_sircle">
              <img src="/github.png" alt="github" />
              <p>Github</p>
            </span>
          </Col>
          <Col xl={3} sm={4} style={{ paddingBottom: 50 }}>
            <span className="skill_sircle">
              <img src="/bootstrap.png" alt="bootstrap" />
              <p>bootstrap</p>
            </span>
          </Col>
          <Col xl={3} sm={4}>
            <span className="skill_sircle">
              <img src="/jquery.png" alt="jquery" />
              <p>jquery</p>
            </span>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Skilles;
