import React from "react";
import "./CartNotify.scss";
import { FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

export default function CartNotify({ onClose }) {
  const navigate = useNavigate();
  const product = {
    title: "Romures",
    price: "20",
    qty: 1,
    image: "festivals_feature_panel.webp",
  };

  const goToBasket = () => navigate("/basket");

  return (
    <div className="notify-container">
      <div className="notify-frame">
        <div className="notify-header flex">
          <span>close</span>
          <button
            className="button button--category button--flat"
            onClick={onClose}
          >
            <FaTimes size={18} />
          </button>
        </div>
        <p className="notify-message">
          {product.title} has been added to your basket
        </p>
        <figure className="notify-product flex">
          <img src={`./images/${product.image}`} alt={product.title} />
          <figcaption className="product-info">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="qty">Quantity: {product.qty}</p>
          </figcaption>
        </figure>
        <div className="notify-footer flex">
          <button className="button button--category">continue shopping</button>
          <button
            className="button button--category button--flat"
            onClick={goToBasket}
          >
            view basket
          </button>
        </div>
      </div>
    </div>
  );
}
