import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../CourseSingle/Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
  return (
    <Container>
      <Row>
        {props.courses.map((course, key = course.id) => (
          <Col lg="4">
            <Card>
              <Card.Img variant="top" src={course.img} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="price">Price: {course.price} USD</p>
                <Button variant="learn-earn" onClick={() => props.handleAddCourses(course)}>
                  <FontAwesomeIcon icon={faBookReader} />
                  <span>Enroll Now</span>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Course;
