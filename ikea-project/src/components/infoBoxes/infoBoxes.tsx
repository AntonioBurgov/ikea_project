import React, { JSX } from "react";
import { FaPencilRuler, FaShoppingCart, FaTools } from "react-icons/fa"; 
import "./InfoBoxes.css"; 

interface InfoBox {
  title: string;
  linkText: string;
  link: string;
  icon: JSX.Element;
}

const infoBoxes: InfoBox[] = [
  { title: "Програми за проектиране на ИКЕА", linkText: "Виж повече", link: "/design-programs", icon: <FaPencilRuler /> },
  { title: "Онлайн пазаруване", linkText: "Виж повече", link: "/online-shopping", icon: <FaShoppingCart /> },
  { title: "Услуги и поддръжка", linkText: "Виж повече", link: "/services-support", icon: <FaTools /> }
];

const InfoBoxes: React.FC = () => {
  return (
    <div className="info-boxes-container">
      {infoBoxes.map((box, index) => (
        <div key={index} className="info-box">
          <div className="info-icon">{box.icon}</div> 
          <span className="at-sr-only">{box.title}</span>
          <a href={box.link} className="info-box-link">{box.linkText}</a>
        </div>
      ))}
    </div>
  );
};

export default InfoBoxes;
