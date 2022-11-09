import React, { useState } from "react";
import { useEffect } from "react";
import "./Carousel.scss";

export default function Carousel({ items, render }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length / 5 - 1);
    } else {
      setCurrentIndex((state) => state - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === items.length / 5 - 1) {
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
      <div className="carousel__header">
        <h2 className="carousel__header__title">You might like...</h2>
        <CarouselAction
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentIndex={currentIndex}
          length={items.length / 5}
        />
      </div>{" "}
      <div className="carousel-container">
        <div
          className="inner"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {items.map((item) => render(item))}
        </div>
      </div>
    </div>
  );
}

function CarouselAction({ handlePrev, handleNext, currentIndex, length }) {
  return (
    <div className="buttons__wrap">
      <button
        className="button__previous"
        type="button"
        onClick={handlePrev}
      ></button>
      <span className="number">{currentIndex + 1}</span>
      <span className="divide"></span>
      <span className="length">{length}</span>
      <button type="button" onClick={handleNext}></button>
    </div>
  );
}
