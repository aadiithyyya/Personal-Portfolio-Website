import React from "react";
import "./Experience.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio";

const Experience = ({ theme }) => {
  return (
    <div className="experience-main">
      <Header theme={theme} />
      <div className="experience-container">
        {/* Header Section */}
        <div className="experience-header">
          <div className="experience-header-img">
            <ExperienceImg theme={theme} />
          </div>
          <div className="experience-header-text">
            <h1 style={{ color: theme.text }}>{experience.title}</h1>
            <h3 style={{ color: theme.secondaryText }}>{experience.subtitle}</h3>
            <p style={{ color: theme.secondaryText }}>{experience.description}</p>
          </div>
        </div>

        {/* Work History Section */}
        <div className="experience-section">
          <h2 className="section-title" style={{ color: theme.text }}>
            Work History
          </h2>
          {experience.sections[0].experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-icon">
                <img src={require(`../../assets/images/${exp.logo_path}`)} alt={exp.company} />
              </div>
              <div className="experience-content">
                <h3 className="experience-title" style={{ color: theme.text }}>
                  {exp.title}
                </h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-duration">{exp.duration} • {exp.location}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <div className="experience-section">
          <h2 className="section-title" style={{ color: theme.text }}>
            Work Experience
          </h2>
          {experience.sections[1].experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-icon">
                <img src={require(`../../assets/images/${exp.logo_path}`)} alt={exp.company} />
              </div>
              <div className="experience-content">
                <h3 className="experience-title" style={{ color: theme.text }}>
                  {exp.title}
                </h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-duration">{exp.duration} • {exp.location}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Experience;
