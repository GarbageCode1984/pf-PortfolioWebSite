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
                        <CardText className="cardStack">
                            <p>Stack : </p>
                            <div>{items.stack}</div>
                        </CardText>
                        <div className="resWebWrap">
                            <a target="_blank" rel="noopener noreferrer" className="cardRes" href={items.res}>
                                <Button size="lg" variant="outline-danger">
                                    Code
                                </Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="webLink" href={items.webLink}>
                                <Button size="lg" variant="outline-dark">
                                    WEB
                                </Button>
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ProjectCard;
