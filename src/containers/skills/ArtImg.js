
import React, { Component } from "react";
import OpenNoteSVG from "../../assets/svg/undraw_making_art_re_ee8w.svg"; // Adjust path as needed

export default class ArtImg extends Component {
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
