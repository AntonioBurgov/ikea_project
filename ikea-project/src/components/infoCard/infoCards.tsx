import React from "react";
import "./infoCards.css";

const infoCardsData = [
  {
    title: "Това е ИКЕА",
    description: "ИКЕА означава много повече от качествени мебели.",
    link: "/about-ikea",
  },
  {
    title: "Дизайн за по-добър живот",
    description: "Нашата философия за функционален и достъпен дизайн.",
    link: "/design-philosophy",
  },
  {
    title: "Нашата мисия",
    description: "Ние се стремим към устойчивост и иновации.",
    link: "/our-mission",
  },
  {
    title: "Работа в ИКЕА",
    description: "Присъединете се към нашия екип и станете част от промяната.",
    link: "/careers",
  },
];

const InfoCards: React.FC = () => {
  return (
    <div className="info-cards-container">
      <div className="info-cards-wrapper">
        {infoCardsData.map((card, index) => (
          <div key={index} className="info-card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.link} className="info-card-btn">Виж повече</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
