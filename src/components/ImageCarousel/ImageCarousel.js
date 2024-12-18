import React, { useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-carousel">
      <div className="carousel-image-container">
        <img
          src={require(`../../assets/images/${images[currentIndex]}`)}
          alt={altText} // Removed redundant "image" word
          className="carousel-image"
        />
      </div>
      <button className="carousel-button prev-button" onClick={goToPrevious}>
        &#8249; {/* Left Arrow */}
      </button>
      <button className="carousel-button next-button" onClick={goToNext}>
        &#8250; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default ImageCarousel;
