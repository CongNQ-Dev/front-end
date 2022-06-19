import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./banner.css";
import img1 from "../../../assets/images/img1.jpg";
import img5 from "../../../assets/images/img5.jpg";

export default class Banner extends Component {
  render() {
    return (
      <section>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h5>various</h5>
              <h1>your holiday</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptate impedit cupiditate dolores excepturi
                eligendi iste temporibus! Quis, natus? Molestiae, voluptatem.
                Assumenda reiciendis dolor iusto eius earum commodi nobis?
                Corporis?.
              </p>
              <button className="btn btn-leftGreen">More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img5} alt="Second slide" />

            <Carousel.Caption>
              <h5>various</h5>
              <h1>your holiday</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptate impedit cupiditate dolores excepturi
                eligendi iste temporibus! Quis, natus? Molestiae, voluptatem.
                Assumenda reiciendis dolor iusto eius earum commodi nobis?
                Corporis?.
              </p>
              <button className="btn btn-leftGreen">More</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}
