import React from "react";
import Header from "./components/header/Header";
import ImageSlider from "./components/imageSlider/imagesSlider";
import InfoBoxes from "./components/infoBoxes/infoBoxes"; 
import BrochureSection from "./components/broschureSection/BrochureSection";
import FeatureSection from "./components/featureSection/FeatureSection";
import SustainabilitySlider from "./components/sustainabilitySlider/SustainabilitySlider";
import FurnitureSlider from "./components/furnitureSlider/FurnitureSlider";
import ImageGrid from "./components/imageGrid/ImageGrid";
import IkeaServices from "./components/ikeaServices/IkeaServices";
import InfoCards from "./components/infoCard/infoCards";
import Footer from "./components/footer/Footer";

const slides = [
  {
    image: "https://ikeabulgaria.akamaized.net/images/844x480/files/ImageGallery/Offers/ikea-family/IKEA_IF_03__844x480.jpg",
    title: "IKEA Family оферти",
    description: "30% отстъпка на избрани продукти с IKEA FAMILY",
    link: "/ikea-family/ikea-family-offers"
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/844x480/files/ImageGallery/Offers/komplement/716860756-ikea-komplement-banner-844x480.jpg",
    title: "Нови колекции",
    description: "Открийте нашите най-нови предложения",
    link: "/collections/new-arrivals"
  }
];

const brochureItems1 = [
  {
    image: "https://ikeabulgaria.akamaized.net/images/600x600/files/ImageGallery/Collections/TJARLEK/PH202002_600x600.jpg",
    title: "Каталог за кухни",
    link: "/brochure/kitchen",
    color: "#0058A3", 
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/600x600/files/ImageGallery/Homepage/rn/hp_banner_600x600.jpg",
    title: "Каталог за дневни",
    link: "/brochure/living-room",
    color: "#A3C300", 
  },
  {
    image: "https://ikeabulgaria.akamaized.net/images/600x600/files/ImageGallery/Catalogue/Brochures/IKEA_Bulgaria_-_Kitchens_2025_600x600.jpg",
    title: "Каталог за спални",
    link: "/brochure/bedroom",
    color: "#D91E18", 
  }
];

const brochureItems2 = [
  {
    image: "https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg",
    title: "Каталог за семейства",
    link: "/brochure/family",
    color: "#FF9900",
  },
  {
    image: "https://cdn.pixabay.com/photo/2018/04/22/13/04/hallway-3341001_1280.jpg",
    title: "Каталог за гардероби",
    link: "/brochure/wardrobes",
    color: "#007C92",
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/05/25/17/54/library-5219747_1280.jpg",
    title: "Каталог за съхранение",
    link: "/brochure/storage",
    color: "#8E44AD",
  }
];


const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto pt-20 p-4">
        
        <section className="mt-6">
          <ImageSlider slides={slides} />
        </section>

        <section className="mt-10">
          <InfoBoxes />
        </section>

        <section className="mt-10">
          <BrochureSection items={brochureItems1} />
        </section>

        <section className="mt-20">
          <FeatureSection
            title="SKOGSDUVA"
            text="Запознайте се с видри, снежни сови, арктически лисици и още много животни, насекоми и растения от шведската гора с колекцията SKOGSDUVA."
            imageUrl="https://ikeabulgaria.akamaized.net/images/w900/files/ImageGallery/Collections/SKOGSDUVA/PH200373_725.jpg"
            link="/collections/skogsduva"
            linkText="Виж цялата колекция"
          />
        </section>

        <section className="mt-10">
          <BrochureSection items={brochureItems2} />
        </section>

        <section className="mt-10">
          <SustainabilitySlider />
        </section>

        <section className="mt-10">
          <FurnitureSlider />
        </section>

        <section className="mt-20">
          <ImageGrid />
        </section>

        <section className="mt-10">
          <IkeaServices />
        </section>

        <section className="mt-20">
          <FeatureSection
            title="SÖDERSJÖN"
            text="Ярки цветове, геометрични форми и комфорт - това е новата баня SÖDERSJÖN! Направете банята си свежа и модерна!"
            imageUrl="https://cdn.pixabay.com/photo/2020/09/14/09/43/living-room-5570484_1280.jpg"
            link="/collections/sodersjon"
            linkText="Открийте SÖDERSJÖN"
            reverse={true} 
          />
        </section>

        <div className="mt-20"></div>

        <section className="mt-20">
          <FeatureSection
            title="BLÅVINGAD"
            text="Открийте вълшебния подводен свят с колекцията BLÅVINGAD. Играчки, текстил и аксесоари, вдъхновени от океана!"
            imageUrl="https://cdn.pixabay.com/photo/2023/09/18/06/00/ai-generated-8259725_1280.jpg"
            link="/collections/blavingad"
            linkText="Разгледайте BLÅVINGAD"
          />
        </section>

        <section className="mt-10">
          <InfoCards />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
