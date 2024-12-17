import React, { Component } from "react";
import OpenNoteSVG from "../../assets/svg/undraw_open_note_cgre.svg"; // Adjust path as needed

export default class DataScienceImg extends Component {
  render() {
    return (
      <img
        src={OpenNoteSVG}
        alt="Open Note Illustration"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }
}

