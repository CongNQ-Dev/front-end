import React, { Component } from "react";
import Welcome from "./welcome/welcome";
import Banner from "./banner/banner";
import Service from "./service/service";
import News from "./news/news";
import Join from "./join/join";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Welcome />
        <Service />
        <News />
        <Join />
      </div>
    );
  }
}
