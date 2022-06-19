import React, { Component } from "react";
import PropsStateChild from "./propsStateChild";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
export default class PropsState extends Component {
  /**
   * state: la chi su thay doi gia tri va thuoc tinh
   * di kem voi no la setState()
   *props: la truyen du lieu theo component tu cha sang
   *: state khong truyen duoc du lieu thong qua component
   */
  render() {
    const listArray = {
      arrProduct: [
        {
          id: 1,
          name: "iphone1",
          price: 100,
          image: img1,
        },
        {
          id: 2,
          name: "iphone2",
          price: 100,
          image: img2,
        },
        {
          id: 3,
          name: "iphone3",
          price: 100,
          image: img3,
        },
      ],
    };

    return (
      <div>
        <PropsStateChild father={listArray} />
      </div>
    );
  }
}
