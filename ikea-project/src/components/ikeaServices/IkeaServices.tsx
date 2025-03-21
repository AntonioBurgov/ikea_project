import React from "react";
import { FaCouch, FaUtensils, FaTruck, FaShoppingBag } from "react-icons/fa"; 
import "./ikeaServices.css"; 

const services = [
  { 
    title: "Съвети за обзавеждане", 
    link: "/customer-support/siteservices/hfa/", 
    icon: <FaCouch className="ikea-service-icon" /> 
  },
  { 
    title: "Проектиране на кухня", 
    link: "/customer-support/siteservices/kitchen-design/", 
    icon: <FaUtensils className="ikea-service-icon" /> 
  },
  { 
    title: "Поръчай и вземи", 
    link: "/customer-support/siteservices/click-and-collect/", 
    icon: <FaTruck className="ikea-service-icon" /> 
  },
  { 
    title: "Поръчай от мобилен хъб", 
    link: "/customer-support/siteservices/mobile-hub/", 
    icon: <FaShoppingBag className="ikea-service-icon" /> 
  }
];

const IkeaServices: React.FC = () => {
  return (
    <section className="ikea-services-container">
      <div className="ikea-services-title">
        <h2>Услуги на ИКЕА</h2>
        <a href="/customer-support/siteservices/" className="ikea-service-link">Вижте всички услуги</a>
      </div>
      <div className="ikea-services-wrapper">
        {services.map((service, index) => (
          <div key={index} className="ikea-service-box">
            {service.icon} 
            <h3>{service.title}</h3>
            <a href={service.link} className="ikea-service-link">Виж повече</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IkeaServices;
