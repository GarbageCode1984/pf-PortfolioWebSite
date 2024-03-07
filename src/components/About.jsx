import React from "react";
import "./scss/about.scss";
import { Container, Row, Col } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

function About() {
    return (
        <div id="about">
            <Container>
                <Bounce bottom>
                    <Row>
                        <div className="aboutWrap">
                            <Col>
                                <div className="aboutLeft">
                                    <img src="/smiling-face.png" alt="smiling" />
                                    <div>
                                        <p>
                                            탄탄한 기본기를 다지고 새로운 기술을 배우며
                                            <br /> 빠르게 변화하는 웹 트렌트에 적응하고
                                            <br />
                                            열심히 배우는 개발자가 되고 싶습니다.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="aboutRight">
                                    <div className="profile">
                                        <h1>Profile</h1>
                                        <p>이름 : 서우석</p>
                                        <p>생년월일 : 1997.03.24</p>
                                        <p>거주지 : 경기도 부천시</p>
                                        <p>이메일 : sws970324@gmail.com</p>
                                        <p>연락처 : 010-2384-8903</p>
                                    </div>
                                    <div className="Education">
                                        <h1>Education</h1>
                                        <p>2018.9.1 ~ 2024.3 : 방송통신대 컴퓨터과학과 졸업</p>
                                        <p>
                                            2022. 7. 13 ~ 2023. 1. 5 : 프로젝트기반 프론트엔드(React, Vue) 웹&앱 SW개발자 양성 과정 강남 그린 컴퓨터 아카데미
                                            수료
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Bounce>
            </Container>
        </div>
    );
}

export default About;
