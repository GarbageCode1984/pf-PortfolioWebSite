import React from "react";
import "./scss/skilles.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";

function Skilles() {
  return (
    <Container fluid>
      <div className="skill_wrap" id="skilles">
        <h1>Skills</h1>
        <Fade left>
          <Row>
            <Col className="circle">
              <span>
                <img src="/html.png" alt="" />
                <p>HTML</p>
              </span>
            </Col>
            <Col className="circle">
              <span>
                <img src="/css.png" alt="" />
                <p>CSS</p>
              </span>
            </Col>
            <Col className="circle">
              <span>
                <img src="/js.png" alt="" />
                <p>JS</p>
              </span>
            </Col>
            <Col className="circle">
              <span>
                <img src="/jquery.png" alt="" />
                <p>Jqeury</p>
              </span>
            </Col>

            <Col className="circle">
              <span>
                <img src="/bootstrap.png" alt="" />
                <p>Bootstrap</p>
              </span>
            </Col>
          </Row>
        </Fade>
        <Fade right>
          <Row>
            <Col className="circle">
              <span>
                <img src="/sass.png" alt="" />
                <p>SASS</p>
              </span>
            </Col>
            <Col className="circle">
              <span>
                <img src="/github.png" alt="" />
                <p>GITHUB</p>
              </span>
            </Col>
            <Col className="circle">
              <span>
                <img src="/figma.png" alt="" />
                <p>FIGMA</p>
              </span>
            </Col>
            <Col className="circle">
              <span>
                <img src="/react.png" alt="" />
                <p>REACT</p>
              </span>
            </Col>
            <Col className="circle">
              <span>
                <img src="/vue.png" alt="" />
                <p>VUE</p>
              </span>
            </Col>
          </Row>
        </Fade>
      </div>
    </Container>
  );
}

export default Skilles;
