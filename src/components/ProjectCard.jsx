import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/projectCard.scss";

function ProjectCard({ items }) {
  return (
    <div>
      <div className="col-12">
        <Card className="cardWrap">
          <CardImg src={items.mainImage} alt="Card image" />
          <CardBody className="d-flex flex-column align-items-center">
            <CardTitle className="cardName">{items.name}</CardTitle>
            <CardSubtitle className="cardHash">{items.hash}</CardSubtitle>
            <CardText className="cardText">{items.skilles}</CardText>
            <a className="cardRes" href={items.res}>
              <Button size="sm" variant="secondary">
                소스코드
              </Button>
            </a>
            <a className="webLink" href={items.webLink}>
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
