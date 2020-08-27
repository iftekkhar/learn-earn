import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "../CourseSingle/Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
  const { img, title, price, description } = props.course;
  return (
    <Col lg="4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <p className="price">Price: {price} USD</p>
          <Button variant="learn-earn" onClick={() => props.handleAddCourses(props.course)}>
            <FontAwesomeIcon icon={faBookReader} />
            <span>Enroll Now</span>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Course;
