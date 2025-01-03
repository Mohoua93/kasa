import { useState } from "react";


export default function Collapse(props) {
    
    const [isOpenMenu, setIsOpenMenu] = useState (true);

    const toggleMenu = () => {
          setIsOpenMenu(! isOpenMenu); // Ferme le menu si on clique sur le même
        }
    
    return (
        <div className="description-dropdown">
          <summary 
            onClick={() => toggleMenu()} 
            style={{ cursor: 'pointer' }} 
            // aria-expanded={isOpenMenu === "description"}
          >
            {props.title}
            <span className={`arrow ${isOpenMenu === true ? "arrow-up" : ""}`}>▼</span>
          </summary>
          { isOpenMenu &&
          <div className={`dropdown-content ${isOpenMenu === true ? "open" : ""}`}>
            <p>{props.content}</p>
          </div>
}
        </div>
    );

}




