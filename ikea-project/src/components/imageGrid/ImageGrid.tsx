import React from "react";
import "./ImageGrid.css";

interface Dot {
  top: string;
  left: string;
  name: string;
  description: string;
  price: string;
}

interface Product {
  id: string;
  image: string;
  dots: Dot[];
}

const products: Product[] = [
  {
    id: "A",
    image: "https://cdn.pixabay.com/photo/2016/11/22/19/11/brick-wall-1850095_1280.jpg",
    dots: [{ top: "50%", left: "30%", name: "Wall Decor", description: "Modern brick wall design", price: "$199.99" }],
  },
  {
    id: "B",
    image: "https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181919_1280.jpg",
    dots: [{ top: "40%", left: "60%", name: "Stylish Chairs", description: "Set of 4 elegant chairs", price: "$299.99" }],
  },
  {
    id: "C",
    image: "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg",
    dots: [{ top: "60%", left: "50%", name: "Cozy Bed", description: "Luxury king-size bed", price: "$899.99" }],
  },
  {
    id: "D",
    image: "https://cdn.pixabay.com/photo/2021/12/25/13/08/real-estate-6893060_1280.jpg",
    dots: [{ top: "70%", left: "40%", name: "Sofa Set", description: "Comfortable living room sofa", price: "$749.99" }],
  },
  {
    id: "E",
    image: "https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_1280.jpg",
    dots: [{ top: "50%", left: "20%", name: "Table Lamp", description: "Elegant bedside lamp", price: "$59.99" }],
  },
  {
    id: "F",
    image: "https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg",
    dots: [{ top: "40%", left: "30%", name: "Kitchen Set", description: "Modern kitchen furniture", price: "$1,499.99" }],
  },
  {
    id: "G",
    image: "https://cdn.pixabay.com/photo/2018/04/22/13/04/hallway-3341001_1280.jpg",
    dots: [{ top: "50%", left: "25%", name: "Hallway Decor", description: "Elegant entryway furniture", price: "$899.99" }],
  },
  {
    id: "H",
    image: "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
    dots: [{ top: "60%", left: "40%", name: "Bedroom Set", description: "Modern bedroom set", price: "$1,200.00" }],
  },
  {
    id: "I",
    image: "https://cdn.pixabay.com/photo/2020/05/25/17/54/library-5219747_1280.jpg",
    dots: [{ top: "50%", left: "30%", name: "Bookshelf", description: "Spacious wooden bookshelf", price: "$399.99" }],
  },
  {
    id: "J",
    image: "https://cdn.pixabay.com/photo/2019/05/24/11/00/interior-4226020_1280.jpg",
    
    dots: [{ top: "50%", left: "20%", name: "Living Room", description: "Minimalist living room decor", price: "$1,899.99" }],
  },
  {
    id: "K",
    image: "https://cdn.pixabay.com/photo/2022/10/04/14/50/computer-7498415_1280.jpg",
    dots: [{ top: "70%", left: "50%", name: "Work Desk", description: "Adjustable standing desk", price: "$699.99" }],
  },
  {
    id: "L",
    image: "https://cdn.pixabay.com/photo/2015/06/24/16/36/home-820389_1280.jpg",
    dots: [{ top: "40%", left: "35%", name: "Modern Couch", description: "Ultra-comfortable sectional couch", price: "$1,299.99" }],
  },

  {
    id: "L",
    image: "https://cdn.pixabay.com/photo/2015/06/24/16/36/home-820389_1280.jpg",
    dots: [{ top: "40%", left: "35%", name: "Modern Couch", description: "Ultra-comfortable sectional couch", price: "$1,299.99" }],
  },
];

const ImageGrid: React.FC = () => {
  return (
    <section className="image-grid-section">
      <div className="masonry-container">
        {products.map((product) => (
          <div key={product.id} className="masonry-item">
            <img src={product.image} alt={`Image ${product.id}`} className="masonry-image" />
            {product.dots.map((dot, index) => (
              <div key={index} className="dot" style={{ top: dot.top, left: dot.left }}>
                <div className="tooltip">
                  <strong>{dot.name}</strong>
                  <p>{dot.description}</p>
                  <span className="price">{dot.price}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
