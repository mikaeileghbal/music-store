import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Zoom.scss";

export default function Zoom({ image, onClose }) {
  return (
    <div className="zoom__container" onClick={onClose}>
      <div
        className="zoom__image__wrapp"
        onClick={(e) => {
          console.log("clicked");
          e.stopPropagation();
        }}
      >
        <div className="zoom__image__button">
          <button
            className="button button--category button--flat"
            onClick={onClose}
          >
            <FaTimes size={18} />
          </button>
        </div>
        <img className="zoom__image" src={image} alt="zoom" />
      </div>
    </div>
  );
}
