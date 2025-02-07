import React, { Component } from "react";

class BusinessDetails extends Component {
  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ color: this.props.theme.text }}>In-Depth Business Details</h1>
        <p style={{ color: this.props.theme.text }}>
          This is a placeholder for in-depth business details. You can add more
          information, charts, or any other relevant content here.
        </p>
      </div>
    );
  }
}

export default BusinessDetails;