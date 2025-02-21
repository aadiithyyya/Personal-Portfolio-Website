import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Splash.css";

function AnimatedSplash({ theme }) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.splashBg }}>
        {/* Animated Fade-In Reveal Name */}
        <h1 className="logo-name fade-reveal" style={{ color: "white" }}>
          Deepika M
        </h1>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    // Add splash-active class to body
    document.body.classList.add("splash-active");

    // Redirect to the home page after 2 seconds
    this.redirectTimer = setTimeout(
      () => this.setState({ redirect: true }),
      1700
    );
  }

  componentWillUnmount() {
    // Remove splash-active class to restore normal scroll behavior
    document.body.classList.remove("splash-active");
    clearTimeout(this.redirectTimer);
  }

  render() {
    const { theme } = this.props;

    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={theme} />
    );
  }
}

export default Splash;
