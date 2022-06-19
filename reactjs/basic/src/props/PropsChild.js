import React, { Component } from "react";

export default class PropsChild extends Component {
  render() {
    //console.log(this.props.list);
    //nhan gia tri tu thang cha 2 cach;
    //cach 1: this.props.tenThangCha
    // console.log(this.props.list.arrProduct);
    //cach2: nhan props: thuoc tinh
    //bac si nguyen dung cach 2: nhanh gon nhe tot
    // console.log(list.arrProduct);
    let { list } = this.props;
    const renderImg = () => {
      return list.arrProduct.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image}></img>
          </div>
        );
      });
    };
    return (
      <div>
        <div className="row">
          <div className="col-6">{renderImg()}</div>
          <div className="col-6">{this.props.demoFather}</div>
        </div>
      </div>
    );
  }
}
