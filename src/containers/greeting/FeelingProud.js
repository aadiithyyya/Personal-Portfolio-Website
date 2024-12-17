import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    return (
      <img
        src={require("../../assets/images/deepi.jpeg")}
        alt="Feeling Proud"
        style={{
          width: "100%", // Responsive width
          maxWidth: "500px", // Restrict maximum width
          height: "auto", // Maintain aspect ratio
          display: "block",
          margin: "0 auto",
        }}
      />
    );
  }
}

export default FeelingProud;
