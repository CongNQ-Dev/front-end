import React, { Component } from "react";
import girl from "../../assets/images/girl.png";
import trangphuc4 from "../../assets/images/trangphuc4.png";
import trangphuc1 from "../../assets/images/trangphuc1.png";
import trangphuc2 from "../../assets/images/trangphuc2.png";
import trangphuc3 from "../../assets/images/trangphuc3.png";
import trangphuc5 from "../../assets/images/trangphuc5.png";
import trangphuc6 from "../../assets/images/trangphuc6.png";
import trangphuc7 from "../../assets/images/trangphuc7.png";
import trangphuc8 from "../../assets/images/trangphuc8.png";
import trangphuc9 from "../../assets/images/trangphuc9.png";
import trangphuc10 from "../../assets/images/trangphuc10.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./room.css";
export default class Room extends Component {
  state = {
    outfit: "",
  };
  render() {
    const changeOutfit = (imgs) => {
      return this.setState({
        outfit: imgs,
      });
    };
    return (
      <div className="room-background">
        <img className="girl" src={girl}></img>
        <img className="present-outfit" src={this.state.outfit} alt="" />
        <div className="closet">
          <Row>
            <Col md={2}>
              <div onClick={() => changeOutfit(trangphuc1)}>
                <img src={trangphuc1} alt="" />
              </div>
            </Col>
            <Col md={2}>
              <div onClick={() => changeOutfit(trangphuc2)}>
                <img src={trangphuc2} alt="" />
              </div>
            </Col>
            <Col md={2}>
              <div onClick={() => changeOutfit(trangphuc3)}>
                <img src={trangphuc3} alt="" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div onClick={() => changeOutfit(trangphuc4)}>
                <img src={trangphuc4} alt="" />
              </div>
            </Col>
            <Col>
              <div onClick={() => changeOutfit(trangphuc5)}>
                <img src={trangphuc5} alt="" />
              </div>
            </Col>
            <Col>
              <div onClick={() => changeOutfit(trangphuc6)}>
                <img src={trangphuc6} alt="" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div onClick={() => changeOutfit(trangphuc7)}>
                <img src={trangphuc7} alt="" />
              </div>
            </Col>
            <Col>
              <div onClick={() => changeOutfit(trangphuc8)}>
                <img src={trangphuc8} alt="" />
              </div>
            </Col>
            <Col>
              <div onClick={() => changeOutfit(trangphuc9)}>
                <img src={trangphuc9} alt="" />
              </div>
            </Col>
            <Row>
              <Col md={4}>
                <div onClick={() => changeOutfit(trangphuc10)}>
                  <img src={trangphuc10} alt="" />
                </div>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    );
  }
}
