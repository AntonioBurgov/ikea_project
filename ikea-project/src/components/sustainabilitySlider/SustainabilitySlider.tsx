import React, { useState } from "react";
import "./SustainabilitySlider.css"; 

interface SustainabilitySlide {
  image: string;
  title: string;
  link: string;
}

const slides: SustainabilitySlide[] = [
  {
    image: "https://ikeabulgaria.akamaized.net/images/w450/files/ImageGallery/sustainability/2023/PH192349.jpg",
    title: "Пестене на енергия",
    link: "/sustainable-life/how-to-save-energy-at-home",
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/w450/files/ImageGallery/sustainability/2023/PH177029.jpg",
    title: "По-малко отпадъци",
    link: "/sustainable-life/how-to-reduce-waste-at-home",
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/w450/files/ImageGallery/sustainability/2023/PH192350.jpg",
    title: "Пестене на вода",
    link: "/sustainable-life/how-to-save-water-at-home",
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/w450/files/ImageGallery/sustainability/2023/PE711332.jpg",
    title: "Дълъг живот на мебелите",
    link: "/sustainable-life/how-to-give-furniture-a-longer-life",
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/w450/files/ImageGallery/sustainability/2023/PH192347.jpg",
    title: "Продукти за многократна употреба",
    link: "/sustainable-life/how-to-use-less-and-reuse-more",
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/w450/files/ImageGallery/sustainability/2023/PH172613.jpg",
    title: "Устойчиво хранене",
    link: "/sustainable-life/how-to-eat-more-sustainably",
  }
];

const SustainabilitySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 5; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= slides.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <section className="sustainability-section">
      <h2 className="sustainability-title">
        Вижте лесни и достъпни начини за по-устойчив начин на живот у дома
      </h2>
      <div className="sustainability-slider-container">
        <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">
          ❮
        </button>

        <div className="sustainability-slider-wrapper">
          {slides.slice(currentIndex, currentIndex + itemsPerPage).map((slide, index) => (
            <div key={index} className="sustainability-slide">
              <img src={slide.image} alt={slide.title} className="sustainability-image" />
              <div className="sustainability-info">
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  {slide.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">
          ❯
        </button>
      </div>
    </section>
  );
};

export default SustainabilitySlider;
