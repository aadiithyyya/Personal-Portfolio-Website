import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { travelHeader, travelDiaries } from "../../portfolio.js";
import "./Opensource.css";

class Travel extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {travelHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {travelHeader.description}
                </p>
              </div>
            </div>
          </Fade>

          {/* Travel Diaries Section */}
          <div className="events-list">
            {travelDiaries.data.map((travel) => (
              <div key={travel.id} className="event-card">
                <div className="event-image">
                  <img
                    src={require(`../../assets/images/${travel.image}`)}
                    alt={travel.name}
                  />
                </div>
                <div className="event-details">
                  <h2 className="event-title" style={{ color: theme.text }}>
                    {travel.name}
                  </h2>
                  <p
                    className="event-description"
                    style={{ color: theme.secondaryText }}
                  >
                    {travel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Travel;
