import React, { useState } from "react";
import "./FurnitureSlider.css"; 

interface FurnitureItem {
  image: string;
  name: string;
  description: string;
  discountPrice: string;
  originalPrice: string;
  link: string;
}

const furnitureItems: FurnitureItem[] = [
  {
    image: "https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181919_1280.jpg",
    name: "Кожен диван KLIPPAN",
    description: "Комфортен и стилен диван за всеки дом.",
    discountPrice: "599 лв.",
    originalPrice: "799 лв.",
    link: "/furniture/klippan-sofa",
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/03/25/23/32/kitchen-2174593_1280.jpg",
    name: "Маса LACK",
    description: "Лека и удобна маса за вашата всекидневна.",
    discountPrice: "129 лв.",
    originalPrice: "179 лв.",
    link: "/furniture/lack-table",
  },
  {
    image: "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg",
    name: "Стол INGOLF",
    description: "Класически дървен стол с удобна седалка.",
    discountPrice: "99 лв.",
    originalPrice: "139 лв.",
    link: "/furniture/ingolf-chair",
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_1280.jpg",
    name: "Гардероб PAX",
    description: "Практичен гардероб с плъзгащи врати.",
    discountPrice: "899 лв.",
    originalPrice: "1199 лв.",
    link: "/furniture/pax-wardrobe",
  },
  {
    image: "https://cdn.pixabay.com/photo/2021/11/08/00/30/bedroom-6778193_1280.jpg",
    name: "Легло MALM",
    description: "Модерно легло с вградено място за съхранение.",
    discountPrice: "699 лв.",
    originalPrice: "999 лв.",
    link: "/furniture/malm-bed",
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg",
    name: "Дизайнерски стол LÅNGFJÄLL",
    description: "Ергономичен стол за офис и работно място.",
    discountPrice: "399 лв.",
    originalPrice: "599 лв.",
    link: "/furniture/langfjall-chair",
  },
  {
    image: "https://cdn.pixabay.com/photo/2018/04/22/13/04/hallway-3341001_1280.jpg",
    name: "Модулен шкаф BESTÅ",
    description: "Модерен шкаф с възможност за персонализация.",
    discountPrice: "249 лв.",
    originalPrice: "349 лв.",
    link: "/furniture/besta-cabinet",
  },
];

const FurnitureSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 5; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= furnitureItems.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? furnitureItems.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <section className="furniture-section">
      <h2 className="furniture-title">
        Открийте нашите предложения за мебели с отстъпка
      </h2>
      <div className="furniture-slider-container">
        <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">
          ❮
        </button>

        <div className="furniture-slider-wrapper">
          {furnitureItems.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <div key={index} className="furniture-slide">
              <img src={item.image} alt={item.name} className="furniture-image" />
              <div className="furniture-info">
                <h3 className="furniture-name">{item.name}</h3>
                <p className="furniture-description">{item.description}</p>
                <p className="furniture-price">
                  <span className="discount-price">{item.discountPrice}</span>
                  <span className="original-price">{item.originalPrice}</span>
                </p>
                <div className="furniture-actions">
                  <button className="add-to-cart">🛒</button>
                  <button className="add-to-favorites">❤️</button>
                </div>
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

export default FurnitureSlider;
