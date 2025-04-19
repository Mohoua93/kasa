import React from "react";
import logementData from "../assets/logements.json";
import { useParams, Navigate } from "react-router-dom";
import "../styles/Annonce.css";
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";
import HostDetails from "../components/HostDetails";
import Tags from "../components/Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";


const Annonce = () => {
  const { id } = useParams();
  const logement = logementData.find((a) => a.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="annonce-container">
      {logement.pictures?.length > 0 && <Slider pictures={logement.pictures} />}

      <div className="header-info">
        <div className="header-left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="host-desktop">
          <HostDetails host={logement.host} rating={logement.rating} />
        </div>
      </div>

      <Tags tags={logement.tags} />

      {/* Affichage Mobile avec étoiles à gauche et hôte à droite */}
      <div className="host-mobile">
        <div className="rating">{getStars(logement.rating)}</div>
        <div className="host">
          <p className="host-name">{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
        </div>
      </div>

      <div className="details-container">
        <div className="collapse-box">
          <Collapse key={0} title="Description" content={logement.description} />
        </div>
        <div className="collapse-box">
          <Collapse 
            key={1} 
            title="Équipements" 
            content={logement.equipments?.length > 0 ? (
              <ul>{logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}</ul>
            ) : (
              <p>Aucun équipement renseigné</p>
            )}
          />
        </div>
      </div>
    </div>
  );
};

// Fonction pour générer les étoiles
const getStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <FontAwesomeIcon
      key={i}
      icon={fullStar}
      className={`star-icon ${i < rating ? "filled" : "empty"}`}
    />
  ));
};

export default Annonce;









