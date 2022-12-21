import React from "react";
import "./scss/about.scss";
import { Button, Spinner, Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div id="about">
      <Container>
        <Row>
          <div className="boxWrap">
            <Col>
              <div className="profile">
                <h1>Profile</h1>
                <p>이름 : 서우석</p>
                <p>생년월일 : 1997.03.24</p>
                <p>거주지 : 경기도 부천시</p>
                <p>이메일 : sws970324@gmail.com</p>
                <p>연락처 : 010-2384-8903</p>
              </div>
            </Col>
            <Col>
              <div className="aboutText">
                <p>
                  탄탄한 기본기를 다지고 새로운 기술을 배우며
                  <br /> 빠르게 변화하는 웹 트렌트에 적응하고 <br />
                  열심히 배우는 개발자가 되고 싶습니다.
                </p>
                <hr />
                <p>
                  2018.9.1 ~ : 방송통신대 컴퓨터과학과 재학중
                  <br />
                  2022. 7. 13 ~ 2023. 1. 5 : 프로젝트기반 프론트엔드(React, Vue)
                  웹&앱
                  <br />
                  SW개발자 양성 과정 강남 그린 컴퓨터 아카데미 수료
                </p>
                <br />
                <br />
                <Button variant="dark">
                  <Spinner
                    as="span"
                    animation="border"
                    variant="danger"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  <div className="spinnerP">경력 추가하기...</div>
                </Button>
                <img src="/icon.png" alt="" />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;
