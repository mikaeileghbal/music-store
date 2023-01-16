import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../data/cartActionCreators";
import { showCartNotify } from "../../data/stateActionCreator";
import CartNotify from "../CartNotify/CartNotify";
import "./Product.scss";

export default function Product({ product, showbtn }) {
  console.log(product);
  return (
    <article className="card">
      <CatImage product={product} />
      <CatContent product={product} showbtn={showbtn} />
    </article>
  );
}

function CatImage({ product }) {
  const { image, category, name } = product;
  return (
    <figure className="cat-image">
      <Link to={`/cd/${name}`} className="cat-link">
        <div className="cat-image-wrapper">
          <img src={`../images/${image}`} alt="category name" />
        </div>
      </Link>
      <div>{/* the yello icon goes here */}</div>
    </figure>
  );
}

function CatContent({ product, showbtn = true }) {
  const { image, category, name, price, description } = product;

  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToCart(product, 1));
    dispatch(showCartNotify());
  };

  return (
    <>
      <div className="cat-content">
        <h2 className="title">{name}</h2>
        <h3 className="artist">artist</h3>

        {price > 0 && <p className="price">{`$${price}`}</p>}
        <p className="media-type">CD box set</p>
        <div className="button-wrapper">
          <button
            onClick={handleAddToBasket}
            className="button button--category button--100"
            style={{ visibility: `${showbtn ? "visible" : "hidden"}` }}
          >
            add to basket
            <MdOutlineKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
