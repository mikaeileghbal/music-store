import React from "react";
import banner from "../../assets/images/banner-2.webp";
import "./Banner.scss";

export default function Banner() {
  return (
    <div className="category-hero">
      <img src={banner} alt="Banner" />
    </div>
  );
}
