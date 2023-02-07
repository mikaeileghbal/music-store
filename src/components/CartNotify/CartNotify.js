import React from "react";
import "./CartNotify.scss";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { closeCartNotify } from "../../data/stateActionCreator";

export default function CartNotify() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = {
    title: "Romures",
    price: "20",
    qty: 1,
    image: "festivals_feature_panel.webp",
  };

  const goToBasket = () => {
    navigate("/basket");
    onClose();
  };

  const onClose = () => dispatch(closeCartNotify());

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
          <button className="button button--category" onClick={onClose}>
            continue shopping
          </button>
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
