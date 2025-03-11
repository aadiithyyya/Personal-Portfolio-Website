import React, { useState, useEffect } from "react";
import { FaFilePdf, FaDownload, FaTimes } from "react-icons/fa";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./BusinessDetails.css";

const BusinessDetails = (props) => {
  const { theme, onToggle } = props;
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    setPdfs([
      {
        id: 1,
        title: "Communication Classess for Students",
        url: "/pdfs/stuposter.pdf",
        description: "A quick overview of the course highlights and vision.",
      },
      {
        id: 2,
        title: "Faculty Development Programs",
        url: "/pdfs/fdp.pdf",
        description:
          "Comprehensive insights into the course journey and goals.",
      },
      {
        id: 3,
        title: "Life Coaching Sessions",
        url: "/pdfs/women.pdf",
        description: "A deep dive into the aim and strategy of the course.",
      },
    ]);
  }, []);

  return (
    <div className="business-container">
      {/* Header */}
      <Header theme={theme} />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content"></div>
      </div>

      {/* PDF Section */}
      <div className="pdf-section">
        <h2>Coaching Classes</h2>
        <div className="pdf-grid">
          {pdfs.map((pdf) => (
            <div key={pdf.id} className="pdf-card">
              <FaFilePdf className="pdf-icon" />
              <h3>{pdf.title}</h3>
              <p className="pdf-description">{pdf.description}</p>
              <div className="pdf-buttons">
                <button
                  onClick={() => setSelectedPdf(pdf.url)}
                  className="view-btn"
                >
                  View PDF
                </button>
                <a href={pdf.url} download className="download-btn">
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen PDF Viewer */}
      {selectedPdf && (
        <div className="pdf-modal">
          <div className="modal-content">
            <FaTimes
              className="close-icon"
              onClick={() => setSelectedPdf(null)}
            />
            <iframe
              src={selectedPdf}
              className="pdf-frame"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}

      <TopButton theme={theme} />
    </div>
  );
};

export default BusinessDetails;
