import React from "react";
import "./LoaderLogo.css";

function LoaderLogo() {
  return React.createElement(
    "div",
    { className: "loader-logo" },
    React.createElement("span", { className: "brand-name" }, "Deepika M"),
    React.createElement(
      "div",
      { className: "dots" },
      React.createElement("span", null, "."),
      React.createElement("span", null, "."),
      React.createElement("span", null, ".")
    )
  );
}

export default LoaderLogo;
