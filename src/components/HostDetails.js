import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Annonce.css";

const HostDetails = ({ host, rating, className }) => {
  const getStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={fullStar}
        className={`star-icon ${i < rating ? "filled" : "empty"}`}
      />
    ));
  };

  return (
    host && host.name && host.picture && (
      <div className={className}>
        <div className="host">
          <img src={host.picture} alt={host.name} className="host-picture" />
          <p className="host-name">{host.name}</p>
        </div>
        <div className="rating">{getStars(rating)}</div>
      </div>
    )
  );
};

export default HostDetails;
