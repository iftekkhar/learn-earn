import React from "react";
import { Navbar, Col, Row, Button } from "react-bootstrap";
import "../Cart/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const payNow = () => {
    alert("Paid! Thank You");
  };
  const cart = props.cart;
  const total = cart.reduce((total, course) => total + course.price, 0);
  return (
    <Row className="cart">
      <Navbar fixed="bottom">
        <Col lg="4" className="cart-text">
          <h4>Enrolled Courses : {cart.length}</h4>
        </Col>
        <Col lg="4" className="cart-text cart-total">
          <h4>Total : {total} USD </h4>
        </Col>
        <Col lg="4" className="cart-text cart-total">
          <Button variant="cart" onClick={payNow}>
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span>Pay Now</span>
          </Button>
        </Col>
      </Navbar>
    </Row>
  );
};

export default Cart;
