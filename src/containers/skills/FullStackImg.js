import React, { Component } from "react";
import OpenNoteSVG from "../../assets/svg/undraw_file_analysis_8k9b.svg"; // Adjust path as needed

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
