import React, { useState } from "react";
import { useEffect } from "react";
import "./Carousel.scss";

export default function Carousel({ items, render }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex((state) => state - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((state) => state + 1);
    }
  };

  useEffect(() => {
    // let interval = setInterval(() => {
    //   console.log(currentIndex);
    //   if (Number(currentIndex) === items.length - 1) {
    //     setCurrentIndex(0);
    //   } else {
    //     setCurrentIndex((currentIndex) => currentIndex + 1);
    //   }
    // }, 3000);
    // return () => clearInterval(interval);
  });

  return (
    <div className="carousel">
      <div className="carousel-title">You might like...</div>
      <div className="carousel-container">
        <div
          className="inner"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {items.map((item) => render(item))}
        </div>
      </div>
      <CarouselAction
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentIndex={currentIndex}
        length={items.length}
      />
    </div>
  );
}

function CarouselAction({ handlePrev, handleNext, currentIndex, length }) {
  return (
    <div className="buttons-wrap">
      <button type="button" onClick={handlePrev}>
        Prev
      </button>
      <span>
        {currentIndex + 1} / {length}
      </span>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
