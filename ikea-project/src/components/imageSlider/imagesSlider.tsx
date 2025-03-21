import React, { useState } from "react";
import "./ImageSlider.css";

interface Slide {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">❮</button>

      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} className="slider-image" alt={`Slide ${index + 1}`} />
            
            <div className="card__info">
              <div className="card__text-wrapper">
                <h2 className="card__title">{slide.title}</h2>
                <div className="card__body">{slide.description}</div>
              </div>
              <span className="card__cta">
                <a href={slide.link} target="_blank" rel="noopener noreferrer" className="card__btn">
                  <span className="btn__inner">
                    <span className="btn__label">Виж повече</span>
                  </span>
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">❯</button>
    </div>
  );
};

export default ImageSlider;
