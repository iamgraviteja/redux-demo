import { useState, useEffect, useCallback } from "react";
import Layout from "./components/Layout/Layout";
/**
 * Image 1: https://splidejs.com/images/slides/image-slider/01.jpg
 * Image 2: https://splidejs.com/images/slides/image-slider/02.jpg
 * Image 3: https://splidejs.com/images/slides/image-slider/03.jpg
 */

const images = [
  "https://splidejs.com/images/slides/image-slider/01.jpg",
  "https://splidejs.com/images/slides/image-slider/02.jpg",
  "https://splidejs.com/images/slides/image-slider/03.jpg",
];

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prevState) => (prevState + 1) % images.length);
  }, []);

  const prevImage = () => {
    setCurrentImage(
      (prevState) => (prevState - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <Layout>
      <div
        style={{
          width: "500px",
          height: "400px",
          margin: "20px auto",
        }}
      >
        <img
          src={images[currentImage]}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          key={currentImage}
          alt={`image-${currentImage}`}
          loading="lazy"
        />
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={prevImage}>Prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </Layout>
  );
}
