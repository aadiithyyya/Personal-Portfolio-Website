import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/aadiithyyya"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{ color: props.theme.text, textDecoration: "none" }}
          >
            Aadithya Ram
          </a>
        </p>
        <p
          className="footer-copyright"
          style={{ color: props.theme.secondaryText }}
        >
          © {new Date().getFullYear()} Aadithya Ram. All Rights Reserved.
        </p>
      </Fade>
    </div>
  );
}
