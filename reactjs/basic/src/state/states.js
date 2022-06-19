import React, { Component } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
export default class States extends Component {
  // trường hợp 1
  state = {
    img: img1,
  };
  render() {
    //  state: là sự thay đổi :TRONG react khi dính tới sự thay đổi thì

    // databinding là gọi hàm trong chuỗi html

    /**
     *  muốn thay đổi từ a sang b : thì đầu tiên cânf phải có a
     */
    //  trường hợp 2
    // const state = {
    //     img: img2
    // }

    // const enters = (imgs) => {

    // }
    const enters = (imgs) => {
      return this.setState({
        img: imgs,
      });
    };

    // const layout = () => {
    //     return (
    //         <h1> truongquangvuong</h1>
    //     )
    // }

    // function layout() {
    //     return (
    //         <h1> truongquangvuong</h1>
    //     )
    // }
    return (
      <div>
        {/* dataBinding : truyeenf gia trị + gọi hàm = "{}" */}
        {/* {layout()} */}
        <img src={this.state.img} width={400} height={400} />
        <button onClick={() => enters(img1)} className="btn btn-success">
          nhấn vào hình 1
        </button>
        {/*  khi hàm có dấu () : bấm nút mới chay ngược lại nếu có  */}

        <button onClick={() => enters(img2)} className="btn btn-success">
          nhấn vào hình 2
        </button>
        {/* <button onClick={() => enters(img3)} className="btn btn-success">
          nhấn vào hình 3
        </button> */}
      </div>
    );
  }
}
