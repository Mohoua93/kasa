import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Collapse.css";

const Collapse = ({ title, content, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownClass = type === "equipments" ? "equipments-dropdown" : "description-dropdown";

  return (
    <div className="collapse">
      <button className="title-dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="arrow" />
      </button>
      <div className={`${dropdownClass} dropdown-content ${isOpen ? "open" : ""}`}>
        {isOpen && <div className="dropdown-text">{content}</div>}
      </div>
    </div>
  );
};

export default Collapse;





