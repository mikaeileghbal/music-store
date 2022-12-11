import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Zoom.scss";

export default function Zoom({ image, onClose }) {
  return (
    <div className="zoom__container" onClickCapture={onClose}>
      <div className="zoom__image__wrapp">
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
