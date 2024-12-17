import React, { Component } from "react";
import OpenNoteSVG from "../../assets/svg/undraw_working_remotely_re_6b3a.svg"; // Adjust path as needed

export default class DataScienceImg extends Component {
  render() {
    return (
      <img
        src={OpenNoteSVG}
        alt="Open Note Illustration"
        style={{ width: "80%", height: "auto" }}
      />
    );
  }
}
