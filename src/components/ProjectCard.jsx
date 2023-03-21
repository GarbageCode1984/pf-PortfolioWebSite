import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/projectCard.scss";

function ProjectCard({ items }) {
    return (
        <div>
            <div>
                <Card className="cardWrap">
                    <CardImg src={items.mainImage} alt="Card image" />
                    <CardBody className="d-flex flex-column align-items-center">
                        <CardTitle className="cardName">{items.name}</CardTitle>
                        <CardText className="cardExplain">{items.explain}</CardText>
                        <CardSubtitle className="cardRole">
                            <p>Role : </p>
                            <div>{items.role}</div>
                        </CardSubtitle>
                        <CardText className="cardStack">{items.stack}</CardText>
                        <a target="_blank" rel="noopener noreferrer" className="cardRes" href={items.res}>
                            <Button size="sm" variant="secondary">
                                소스코드
                            </Button>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="webLink" href={items.webLink}>
                            <Button size="lg" variant="outline-dark">
                                WEB
                            </Button>
                        </a>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ProjectCard;
