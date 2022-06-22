import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <section>
        <Container>
          <div className="footer-grids">
            <Row>
              <Col>
                <h1>History of us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  quasi amet repellat temporibus neque delectus, harum totam
                  mollitia ea excepturi fugiat. Quasi repellat enim ipsa, nemo
                  rem nostrum illo quae?
                </p>
              </Col>
              <Col>
                <h1>Twitter Posts</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium, excepturi temporibus impedit ab quia qui officia
                  harum eum vero, possimus aut recusandae dolor, eius molestiae
                  eaque sunt unde culpa illo.
                </p>
              </Col>
              <Col>
                <h1>Events</h1>
                <ul>
                  <li>
                    <a href="">
                      12 Aug <b>Curriculum</b>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      12 Aug <b>Curriculum</b>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      12 Aug <b>Curriculum</b>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      12 Aug <b>Curriculum</b>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      12 Aug <b>Curriculum</b>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h1>Navigations</h1>
                <ul>
                  <li>
                    <b>
                      <a href="">Home</a>
                    </b>
                  </li>
                  <li>
                    <b>
                      <a href="">About</a>
                    </b>
                  </li>
                  <li>
                    <b>
                      <a href="">Pages</a>
                    </b>
                  </li>
                  <li>
                    <b>
                      <a href="">Code</a>
                    </b>
                  </li>
                  <li>
                    <b>
                      <a href="">Galerry</a>
                    </b>
                  </li>
                  <li>
                    <b>
                      {" "}
                      <a href="">Contact</a>
                    </b>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="footer-copyRight">
          <Container>
            <p>
              © 2022 Njoy Travels. All rights reserved | Design by{" "}
               <span> Nguyen Quoc Cong</span>
            </p>
          </Container>
        </div>
      </section>
    );
  }
}
