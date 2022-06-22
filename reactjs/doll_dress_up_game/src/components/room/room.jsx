import React, { Component } from "react";
import girl from "../../assets/images/starActor.png";
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
            <Col>
              <div onClick={() => changeOutfit(trangphuc1)}>
                <img className="outfit1" src={trangphuc1} alt="" />
              </div>
            </Col>
            <Col>
              <div onClick={() => changeOutfit(trangphuc2)}>
                <img src={trangphuc2} alt="" />
              </div>
            </Col>
            <Col>
              <div onClick={() => changeOutfit(trangphuc3)}>
                <img src={trangphuc3} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
