import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./service.css";
export default class Service extends Component {
  render() {
    return (
      <section>
        <div className="service">
          <Container>
            <div className="service-content">
              <h1>service</h1>
              <Row>
                <Col>
                  <div className="item">
                    <div className="service-icon">
                      <i class="fa-solid fa-anchor"></i>
                    </div>
                    <h5>Lorem ipsum</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, tempora ratione? Alias voluptate, molestiae
                      rerum a quo illo explicabo quibusdam officiis nam
                      distinctio aliquid amet at dolor laboriosam sint aut?
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <div className="service-icon">
                      <i class="fa-solid fa-comment"></i>
                    </div>
                    <h5>Lorem ipsum</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, tempora ratione? Alias voluptate, molestiae
                      rerum a quo illo explicabo quibusdam officiis nam
                      distinctio aliquid amet at dolor laboriosam sint aut?
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <div className="service-icon">
                      <i class="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h5>Lorem ipsum</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, tempora ratione? Alias voluptate, molestiae
                      rerum a quo illo explicabo quibusdam officiis nam
                      distinctio aliquid amet at dolor laboriosam sint aut?
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="service-content">
              <Row>
                <Col>
                  <div className="item">
                    <div className="service-icon">
                      <i class="fa-solid fa-magnet"></i>
                    </div>
                    <h5>Lorem ipsum</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, tempora ratione? Alias voluptate, molestiae
                      rerum a quo illo explicabo quibusdam officiis nam
                      distinctio aliquid amet at dolor laboriosam sint aut?
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <div className="service-icon">
                      <i class="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h5>Lorem ipsum</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, tempora ratione? Alias voluptate, molestiae
                      rerum a quo illo explicabo quibusdam officiis nam
                      distinctio aliquid amet at dolor laboriosam sint aut?
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <div className="service-icon">
                      <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                    <h5>Lorem ipsum</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, tempora ratione? Alias voluptate, molestiae
                      rerum a quo illo explicabo quibusdam officiis nam
                      distinctio aliquid amet at dolor laboriosam sint aut?
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    );
  }
}
