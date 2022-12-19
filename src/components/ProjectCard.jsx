import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCard() {
    return (
        <div>
            <div className="col-12">
                <Card>
                    <CardImg src={"/project1.PNG"} alt="Card image" />
                    <CardBody className="d-flex flex-column align-items-center">
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ProjectCard;
