import { useState } from "react";


export default function Collapse(props) {
    
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        if (openMenu === menu) {
          setOpenMenu(null); // Ferme le menu si on clique sur le même
        } else {
          setOpenMenu(menu); // Ouvre le menu cliqué et ferme l'autre
        }
      };
    
    return (
        <div className="description-dropdown">
          <summary 
            onClick={() => toggleMenu("description")} 
            style={{ cursor: 'pointer' }} 
            aria-expanded={openMenu === "description"}
          >
            {props.title}
            <span className={`arrow ${openMenu === "description" ? "arrow-up" : ""}`}>▼</span>
          </summary>
          <div className={`dropdown-content ${openMenu === "description" ? "open" : ""}`}>
            <p>{props.content}</p>
          </div>
        </div>
    );
}
