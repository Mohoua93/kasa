import React from 'react';
import './About.css';
import featuredImage from '../Asset/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'; 
import Footer from './Footer';
import Collapse from './Collapse';

const About = () => {
    // Contenus dynamiques pour les sections
    const sections = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <div className="about-container">
            {/* Image de présentation */}
            <section className="image-section">
                <img src={featuredImage} alt="Magnifique paysage de montagne" className="featured-image" />
            </section>

            {/* Accordéons dynamiques */}
            <section className="accordion-section">
                {sections.map((section, index) => (
                    <Collapse key={index} title={section.title} content={section.content} />
                ))}
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;


