import React from "react";
import "./FeatureSection.css"; 

interface FeatureSectionProps {
  title: string;
  text: string;
  imageUrl: string;
  link: string;
  linkText: string;
  reverse?: boolean; 
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  text,
  imageUrl,
  link,
  linkText,
  reverse = false,
}) => {
  return (
    <section className="feature-section">
      <div className={`feature-container ${reverse ? "reverse" : ""}`}>
        <div className="feature-image">
          <img src={imageUrl} alt={title} />
        </div>

        <div className="feature-info">
          <div className="card__text-wrapper at-card__text-wrapper-large">
            <h2 className="card__title">{title}</h2>
            <div className="card__body">
              <p>{text}</p>
            </div>
          </div>

          <span className="card__cta card__cta--with-button">
            <a href={link} className="card__btn btn btn--primary-inverse btn--small">
              <span className="btn__inner">
                <span className="btn__label">{linkText}</span>
              </span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
