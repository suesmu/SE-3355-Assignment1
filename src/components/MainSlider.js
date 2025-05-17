'use client';
import React, { useEffect, useState } from 'react';

export default function MainSlider() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Verileri çek
  useEffect(() => {
    fetch('/api/slider')
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  // Otomatik geçiş 4 saniyede bir
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [slides]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      slides.length === 0 ? 0 : (prevIndex + 1) % slides.length
    );
  };


const goToPrevious = () => {
  setCurrentIndex((prevIndex) =>
    slides.length === 0 ? 0 : (prevIndex - 1 + slides.length) % slides.length
  );
};




  if (slides.length === 0) {
    return <div className="text-gray-500">Yükleniyor...</div>;
  }

  const slide = slides[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto my-1 bg-white rounded-lg shadow overflow-hidden relative">
      <a href={slide.link} target="_blank" rel="noopener noreferrer">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-96 object-contain"
        />
        <div className="p-4 text-lg font-semibold text-center">{slide.title}</div>
      </a>


      <button
  onClick={goToPrevious}
  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-70 transition"
>
  ❮
</button>

      
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-70 transition"
      >
        ❯
      </button>
      
      
    </div>
  );
}
