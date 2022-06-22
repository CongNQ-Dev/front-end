import React, { Component } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import PropsChild from "./PropsChild";
export default class Props extends Component {
  demo = () => {
    return <div>nguyen quoc cong</div>;
  };
  render() {
    //demo props
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
    //props duoc hieu la truyen gia tri tu cha sang con
    //va cach thuc viet la tu khoa khai bao bien: xxxx= {data truyen vao}
    return (
      <div>
        <PropsChild list={listArray} demoFather={this.demo} />
      </div>
    );
  }
}
