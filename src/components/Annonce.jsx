import React, { useState } from "react";
import logementData from "../Asset/logements.json"; // Importation du fichier JSON
import { useParams } from "react-router-dom";
import './Annonce.css';
import Footer from './Footer';
import Collapse from "./Collapse";


// Composant Slider pour les images
const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);

  return (
    <div className="slider">
      <button 
        className="left-arrow" 
        onClick={prevSlide} 
        aria-label="Image précédente"
        disabled={currentIndex === 0}
      >
        ❮
      </button>
      <div className="slide">
        <img 
          className="slide-img" 
          src={pictures[currentIndex]} 
          alt={`Image ${currentIndex + 1} de la galerie`} 
          loading="lazy" 
        />
      </div>
      <button 
        className="right-arrow" 
        onClick={nextSlide} 
        aria-label="Image suivante"
        disabled={currentIndex === pictures.length - 1}
      >
        ❯
      </button>
    </div>
  );
};

// Composant HostDetails pour les informations sur l'hôte avec le rating en colonne sous le nom
const HostDetails = ({ host, rating }) => {
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar ? "☆" : ""}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    host && host.name && host.picture && (
      <div className="host-container">
        <div className="host">
          <img src={host.picture} alt={host.name} className="host-picture" />
          <div className="host-info">
            <p className="host-name">{host.name}</p>
            <div className="rating">
              {getStars(rating)}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

// Composant Tags pour l'affichage des tags
const Tags = ({ tags }) => {
  return (
    tags && tags.length > 0 && (
      <div className="tags">
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    )
  );
};

const Annonce = () => {
  const { id } = useParams();
  const logement = logementData.find((a) => a.id === id);
  const equipment = logement.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ))
  return (
    <div className="annonce-container">
      {/* Galerie avec Slider */}
      {logement.pictures && logement.pictures.length > 0 && <Slider pictures={logement.pictures} />}

      {/* Conteneur pour le titre, la localisation et le rating */}
      <div className="header-info">
        <div>
          {/* Titre et localisation */}
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        {/* Hôte avec rating à droite */}
        <HostDetails host={logement.host} rating={logement.rating} />
      </div>

      {/* Tags */}
      <Tags tags={logement.tags} />

      {/* Conteneur flex pour la description et les équipements */}
      <div className="details-container">
       
        <Collapse key={0} title="Description" content={logement.description}/>
        <Collapse key={1} title="Equipement" content={equipment}/>
      </div>
      <Footer />
    </div>

  );
};

export default Annonce;
