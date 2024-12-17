import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { eventsHeader, events } from "../../portfolio.js";
import "./Projects.css";

class Projects extends Component {
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
                  {eventsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {eventsHeader.description}
                </p>
              </div>
            </div>
          </Fade>

          {/* Events and Connections Section */}
          <div className="events-list">
            {events.data.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img
                    src={require(`../../assets/images/${event.image}`)}
                    alt={event.name}
                  />
                </div>
                <div className="event-details">
                  <h2 className="event-title" style={{ color: theme.text }}>
                    {event.name}
                  </h2>
                  <p
                    className="event-description"
                    style={{ color: theme.secondaryText }}
                  >
                    {event.description}
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

export default Projects;
