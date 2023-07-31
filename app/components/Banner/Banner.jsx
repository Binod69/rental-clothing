'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slides from './slide/slides';
import SlideBanner from './slide/SlideBanner';
import Link from 'next/link';

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
    <>
      <div className="carousel w-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full"
          >
            <SlideBanner slide={slide} />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#1" className="btn btn-circle btn-sm">
                ❮
              </Link>
              <Link href="#2" className="btn btn-circle btn-sm">
                ❯
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
