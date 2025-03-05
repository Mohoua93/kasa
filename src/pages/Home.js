import React from "react";
import "../styles/Home.css";
import featuredImage from "../assets/home-pics.png";
import logements from "../assets/logements.json";
import { Link } from "react-router-dom";

const LogementCard = ({ logement }) => (
    <Link to={`/annonce/${logement.id}`} key={logement.id}>
        <div className="gallery-item">
            <img src={logement.cover} alt={logement.title} />
            <div className="gallery-item-title">{logement.title}</div>
        </div>
    </Link>
);

const Home = () => {
    return (
        <div>
            <section className="about">
                <div className="image-container">
                    <img src={featuredImage} alt="Featured" className="featured-image" />
                    <div className="image-overlay" aria-hidden="true"></div>
                    <div className="image-text">Chez vous, partout et ailleurs</div>
                </div>
            </section>

            <section className="gallery">
                {logements.map((logement) => (
                    <LogementCard logement={logement} key={logement.id} />
                ))}
            </section>
        </div>
    );
};

export default Home;



