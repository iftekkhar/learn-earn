import React, { useState } from "react";
import "../Shop/Shop.css";
import Course from "../CourseSingle/Course";
import { Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Shop = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/iftekkhar/fake-course-data/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);
  const handleAddCourses = (course) => {
    console.log("Clicked", course);
    const newcart = [...cart, course];
    setCart(newcart);
  };
  return (
    <div className="shop">
      <h2>All Courses</h2>
      <Container>
        <Row>
          {courses.map((course) => (
            <Course course={course} handleAddCourses={handleAddCourses} key={course.id}></Course>
          ))}
        </Row>
      </Container>

      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
