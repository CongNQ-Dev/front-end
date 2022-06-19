import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";

import "./welcome.css";

export default class Welcome extends Component {
  render() {
    return (
      <section>
        <Container>
          <h1>welcome</h1>
          <div className="first-content">
            <Row>
              <Col md={8}>
                <div className="content-left">
                  <h5>Lorem, ipsum dolor.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor ut minima maxime vitae, expedita nemo accusamus
                    provident dolore possimus illum placeat tempora excepturi
                    aperiam necessitatibus tempore id. Quidem, quae recusandae.
                    Voluptatibus unde ut odio a, reprehenderit alias. Inventore
                    consequuntur repudiandae dicta quasi nihil commodi, autem
                    odio, magnam quibusdam, magni quod neque accusantium nostrum
                    alias vero voluptatem voluptatum unde rem explicabo?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque necessitatibus velit pariatur qui magnam nisi
                    blanditiis maxime earum! Vel possimus ducimus placeat illo
                    pariatur dolores, sit hic amet saepe accusamus?
                  </p>
                </div>
                <button className="btn btn-leafGreen">More</button>
              </Col>

              <Col md={4}>
                <div className="content-right">
                  <img src={img2} alt="" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="second-content">
            <Row>
              <Col md={4}>
                <div className="content-left">
                  <img src={img3} alt="" />
                </div>
              </Col>
              <Col md={8}>
                <div className="content-right">
                  <h5>Lorem, ipsum dolor.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor ut minima maxime vitae, expedita nemo accusamus
                    provident dolore possimus illum placeat tempora excepturi
                    aperiam necessitatibus tempore id. Quidem, quae recusandae.
                    Voluptatibus unde ut odio a, reprehenderit alias. Inventore
                    consequuntur repudiandae dicta quasi nihil commodi, autem
                    odio, magnam quibusdam, magni quod neque accusantium nostrum
                    alias vero voluptatem voluptatum unde rem explicabo?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque necessitatibus velit pariatur qui magnam nisi
                    blanditiis maxime earum! Vel possimus ducimus placeat illo
                    pariatur dolores, sit hic amet saepe accusamus?
                  </p>
                </div>
                <button className="btn btn-leafGreen">More</button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
