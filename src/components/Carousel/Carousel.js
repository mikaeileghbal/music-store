import React, { useState } from "react";
import { useEffect } from "react";
import "./Carousel.scss";

export default function Carousel({ items, groupSize, render, header }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const groupCount = Math.ceil(items.length / groupSize);

  const groupItems = (items, groupSize) => {
    console.log(groupSize, items);
    let rows = items
      .map(function (item) {
        return render(item);
      })
      .reduce((r, element, index) => {
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
      }, [])
      .map((row) => <div className="carousel-group">{row}</div>);

    return rows;
  };

  const groupedItems = groupItems(items, groupSize);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length / groupSize - 1);
    } else {
      setCurrentIndex((state) => state - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === items.length / groupSize - 1) {
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
        <h2 className="carousel__header__title">{header}</h2>
        <CarouselAction
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentIndex={currentIndex}
          length={items.length / groupSize}
        />
      </div>{" "}
      <div className="carousel-container">
        <div
          className="inner"
          style={{
            transform: `translateX(-${currentIndex * (100 / groupCount)}%)`,
            width: `calc(100% * ${groupCount})`,
            gridTemplateColumns: `repeat(${groupCount},1fr)`,
          }}
        >
          {groupedItems.map((item) => item)}
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
      <button
        className="button__next"
        type="button"
        onClick={handleNext}
      ></button>
    </div>
  );
}
