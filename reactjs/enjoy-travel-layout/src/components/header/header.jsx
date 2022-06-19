import React, { Component } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col>
              <div className="logo">
                <h3>njoy</h3>
                <h1>travels</h1>
              </div>
            </Col>
            <Col>
              <div className="right-header">
                <div className="contact">
                  <div className="phone">
                    <i className="fa-solid fa-phone"></i> : +84 163 4643 124
                  </div>
                  <div className="mail">
                    <i className="fa-solid fa-envelope"></i> :
                    congnguyen.working@gmail.com
                  </div>
                </div>
                <Row>
                  <div className="menu-nav">
                    <Col>
                      <div className="menu">
                        <Navbar expand="lg">
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                              <Nav.Link key="home" href="#home">
                                Home
                              </Nav.Link>
                              <Nav.Link href="#link">About</Nav.Link>
                              <Nav.Link href="#link">Pages</Nav.Link>
                              <Nav.Link href="#link">Galerry</Nav.Link>
                              <Nav.Link href="#link">Contact</Nav.Link>
                            </Nav>
                          </Navbar.Collapse>
                        </Navbar>
                      </div>
                    </Col>
                    <Col>
                      <div className="social-media">
                        <div className="gooogle icon">
                          <i className="fa-brands fa-google-plus-g"></i>
                        </div>
                        <div className="linkedin icon">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="twitter icon">
                          <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="facebook icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
