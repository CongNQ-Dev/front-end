import React, { Component } from "react";
import "./news.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import img4 from "../../../assets/images/img4.jpg";
export default class News extends Component {
  render() {
    return (
      <div className="news">
        <Container>
          <h1>news</h1>
          <Row>
            <Col md={5}>
              <div className="left-content">
                <img src={img4} alt="" />
              </div>
            </Col>
            <Col md={5}>
              <div className="right-content">
                <div className="admin">
                  <i class="fa-solid fa-user"></i>Admin
                </div>
                <Form.Group controlId="dob">
                  <Form.Control
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                  />
                </Form.Group>
              </div>
              <h2>The most beautiful beach on over the world</h2>
              <button className="btn btn-leafGreen">More</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
