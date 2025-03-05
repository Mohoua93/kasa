import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="return-link">Retour à la page d'accueil</Link>
      </div>
    </div>
  );
};

export default NotFound;
