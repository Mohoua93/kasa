import React, { useState } from "react";
import logementData from "../assets/logements.json";
import { useParams } from "react-router-dom";
import "../styles/Annonce.css";
import Collapse from "../components/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

// Composant Slider pour les images
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

// Composant HostDetails avec étoiles FontAwesome
const HostDetails = ({ host, rating }) => {
  const getStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon key={i} icon={fullStar} className="star-icon" />
    ));
  };

  return (
    host && host.name && host.picture && (
      <div className="host-container">
        <div className="host">
          <img src={host.picture} alt={host.name} className="host-picture" />
          <div className="host-info">
            <p className="host-name">{host.name}</p>
            <div className="rating">{getStars(rating)}</div>
          </div>
        </div>
      </div>
    )
  );
};

// Composant Tags pour l'affichage des tags
const Tags = ({ tags }) => (
  tags?.length > 0 && (
    <div className="tags">
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
);

const Annonce = () => {
  const { id } = useParams();
  const logement = logementData.find((a) => a.id === id);

  if (!logement) {
    return <p className="error-message">Annonce introuvable</p>;
  }

  return (
    <div className="annonce-container">
      {logement.pictures?.length > 0 && <Slider pictures={logement.pictures} />}

      <div className="header-info">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <HostDetails host={logement.host} rating={logement.rating} />
      </div>

      <Tags tags={logement.tags} />

      <div className="details-container">
        <div className="collapse-box">
          <Collapse key={0} title="Description" content={logement.description} />
        </div>
        <div className="collapse-box">
          <Collapse key={1} title="Équipements" content={<ul>{logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}</ul>} />
        </div>
      </div>
    </div>
  );
};

export default Annonce;
