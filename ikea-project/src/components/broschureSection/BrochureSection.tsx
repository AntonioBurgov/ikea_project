import React from "react";
import "./BrochureSection.css";

interface Brochure {
  image: string;
  title: string;
  link: string;
  color: string;
}

interface BrochureSectionProps {
  items: Brochure[];
}

const BrochureSection: React.FC<BrochureSectionProps> = ({ items }) => {
    return (
      <div className="brochure-section">
        <h2 className="brochure-title">Открийте най-новите брошури на IKEA</h2>
        <div className="brochure-container">
          {items.map((brochure, index) => (
            <div key={index} className="brochure-item">
              <img src={brochure.image} alt={brochure.title} className="brochure-image" />
              <div className="brochure-info" style={{ backgroundColor: brochure.color }}>
                <span className="brochure-text">{brochure.title}</span>
                <a href={brochure.link} target="_blank" rel="noopener noreferrer" className="brochure-arrow">
                  →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default BrochureSection;
