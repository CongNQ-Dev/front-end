import React, { Component } from "react";

export default class PropsStateChild extends Component {
  state = {
    img: this.props.father.arrProduct[0].image,
  };

  render() {
    const { father } = this.props;

    const changeImg = (imgs) => {
      return this.setState({
        img: imgs,
      });
    };
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-6">
              <img src={this.state.img}></img>
            </div>
            <div className="col-6">
              {father.arrProduct.map((item, index) => {
                return (
                  <button key={index} onClick={() => changeImg(item.image)}>
                    <img src={item.image} height={200} width={200}></img>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
