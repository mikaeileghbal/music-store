import React from "react";
import banner from "../../assets/images/banner.webp";
import "./Banner.scss";

export default function Banner() {
  return (
    <div className="category-hero container">
      <img src={banner} alt="Banner" />
    </div>
  );
}
