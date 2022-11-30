import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Zoom.scss";

export default function Zoom({ image, onClose }) {
  return (
    <div className="zoom__container">
      <div className="zoom__image__wrapp" onClick={onClose}>
        <button
          className="button button--category button--flat"
          onClick={onClose}
        >
          <FaTimes size={18} />
        </button>
        <img className="zoom__image" src={image} alt="zoom" />
      </div>
    </div>
  );
}
