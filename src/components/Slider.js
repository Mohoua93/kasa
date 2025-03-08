import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Annonce.css";

const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sumSlide = pictures.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="slider">
      <div className="slide">
        <img
          className="slide-img"
          src={pictures[currentIndex]}
          alt={`Vue ${currentIndex + 1} de la galerie`}
          loading="lazy"
        />
      </div>
      {sumSlide > 1 && (
        <>
          <button className="left-arrow" onClick={prevSlide} aria-label="Image précédente" aria-live="polite">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="right-arrow" onClick={nextSlide} aria-label="Image suivante" aria-live="polite">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="slider-counter">{currentIndex + 1}/{pictures.length}</div>
        </>
      )}
    </div>
  );
};

export default Slider;
