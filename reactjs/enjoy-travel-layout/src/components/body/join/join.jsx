import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import "../join/join.css";
import img4 from "../../../assets/images/img4.jpg";
export default class Join extends Component {
  render() {
    return (
      <div className="join">
        <Container>
          <h1>join the club</h1>
          <Form className="input-subscribe">
            <input type="text" placeholder="subscribe" />
            <button type="submit" className="btn btn-leafGreen">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </Form>
        </Container>
      </div>
    );
  }
}
