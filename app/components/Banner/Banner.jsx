'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import hero1 from '../../img/hero1.webp';
import hero2 from '../../img/hero2.webp';

const slides = [
  { id: 1, image: hero1, alt: 'hero1.webp' },
  { id: 2, image: hero2, alt: 'hero2.jpg' },
  // Add more slides here if needed
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNavigation = (step) => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + step;
      if (nextSlide > slides.length) return 1;
      if (nextSlide < 1) return slides.length;
      return nextSlide;
    });
  };

  return (
    <div>
      <div className="carousel w-full relative">
        <AnimatePresence>
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className={`carousel-item w-full ${
                slide.id === currentSlide ? '' : 'hidden'
              }`}
            >
              <Image src={slide.image} className="w-full" alt={slide.alt} />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="absolute flex justify-between items-center top-1/2 left-5 right-5 transform -translate-y-1/2">
          <button
            onClick={() => handleNavigation(-1)}
            className="btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={() => handleNavigation(1)}
            className="btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
