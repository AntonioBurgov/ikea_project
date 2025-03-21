import React, { useState, useEffect } from "react";
import { FiMenu, FiUser, FiHeart, FiShoppingBag, FiX } from "react-icons/fi";
import CustomSearchBar from "./customSearchBar/CustomSearchBar";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`header-container ${isVisible ? "visible" : "hidden"}`}>
        {/* Left Section */}
        <div className="left-section">
          <button onClick={() => setIsMenuOpen(true)} className="menu-button">
            <FiMenu />
          </button>
          <a href="/" className="logo-container">
            <img src="https://www.ikea.bg/Content/Media/logo.svg" alt="IKEA Logo" />
          </a>
        </div>

        <div className="search-section">
          <CustomSearchBar />
        </div>

        <div className="right-section">
          <button><FiUser /></button>
          <button><FiHeart /></button>
          <button><FiShoppingBag /></button>
        </div>
      </header>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <img src="https://www.ikea.bg/Content/Media/logo.svg" alt="IKEA Logo" className="menu-logo" />
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            <FiX />
          </button>
        </div>

        <ul className="menu-items">
          <li><a href="#">Продукти</a></li>
          <li><a href="#">Стаи</a></li>
          <li><a href="#">Вдъхновение</a></li>
          <li><a href="#">Услуги на ИКЕА</a></li>
          <li><a href="#">Оферти</a></li>
          <li><a href="#">Свържете се с нас</a></li>
          <li><a href="#">Ваучер за подарък ИКЕА</a></li>
          <li><a href="#">IKEA Live Shopping</a></li>
          <li><a href="#">ΙΚΕΑ Family</a></li>
          <li><a href="#">ИКЕА за бизнеса</a></li>
          <li><a href="#">ИКЕА Храни и напитки</a></li>
          <li><a href="#">Магазини</a></li>
        </ul>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
};

export default Header;
