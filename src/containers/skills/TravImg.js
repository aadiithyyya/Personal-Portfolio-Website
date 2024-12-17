
import React, { Component } from "react";
import OpenNoteSVG from "../../assets/svg/undraw_adventure_map_hnin.svg"; // Adjust path as needed

export default class TravImg extends Component {
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
