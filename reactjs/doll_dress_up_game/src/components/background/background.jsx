import React, { Component } from "react";
import "./background.css";
import girl from "../../assets/images/girl.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Room from "../room/room";

export default class Background extends Component {
  render() {
    return (
      <div>
        <div className="dress-background">
          <div className="text">
            <a
              href="https://www.nobears.nl"
              className="text__3d"
              data-line="DressUp&#xa;Doll"
            >
              Dress Up
              <br />
              Doll
            </a>
          </div>
          <img className="girl" src={girl}></img>
          <button className="btn-play">
            <button className="button-os">
              <a href="#">PLAY</a>
            </button>
          </button>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    );
  }
}
