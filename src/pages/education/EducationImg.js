import React, { Component } from "react";
import { ReactComponent as EducationSVG } from "../../assets/svg/undraw_education_f8ru.svg";

export default class EducationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ width: "100%", maxWidth: "400px", margin: "auto" }}>
        {/* Adjust size with width and height */}
        <EducationSVG 
          style={{ 
            width: "120%", 
            height: "auto", 
            fill: theme.imageHighlight 
          }} 
        />
      </div>
    );
  }
}
