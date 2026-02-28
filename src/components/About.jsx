import "./scss/about.scss";
import { Container, Row, Col } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

function About() {
    return (
        <div id="about">
            <Container>
                <Bounce bottom>
                    <Row className="align-items-center">
                        <div className="aboutWrap">
                            <Col md={6}>
                                <div className="aboutLeft">
                                    <img src="/smiling-face.png" alt="smiling" />
                                    <p>
                                        사용자 경험을 중심으로 설계하는 웹 개발자입니다.
                                        <br />
                                        프론트엔드를 기반으로 API 서버 구축과 배포까지 수행했습니다.
                                        <br />
                                        문제를 분석하고 해결하는 과정을 즐기며
                                        <br />
                                        실전 환경에서의 이슈 해결 경험을 쌓아가고 있습니다.
                                    </p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="aboutCard">
                                    <h2 className="cardTitle">Contact</h2>

                                    <div className="cardSection">
                                        <p className="name">서우석</p>
                                        <p>sws970324@gmail.com</p>
                                        <p>
                                            GitHub :
                                            <a
                                                href="https://github.com/GarbageCode1984"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                github.com/GarbageCode1984
                                            </a>
                                        </p>
                                    </div>

                                    <div className="divider" />

                                    <div className="cardSection">
                                        <h3>Education</h3>
                                        <p>컴퓨터과학 전공</p>
                                        <p>React 기반 웹 개발 과정 수료</p>
                                    </div>

                                    <div className="divider" />

                                    <div className="cardSection">
                                        <h3>Certification</h3>
                                        <p>정보처리기사</p>
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
