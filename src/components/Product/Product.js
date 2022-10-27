import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Product.scss";

export default function Product({
  image,
  category,
  title,
  price = 0,
  description = "",
  to,
}) {
  return (
    <article className="card">
      <CatImage image={image} to={to} />
      <CatContent
        title={title}
        description={description}
        price={price}
        category={category}
      />
    </article>
  );
}

function CatImage({ image, to }) {
  return (
    <figure className="cat-image">
      <Link to={to} className="cat-link">
        <div className="cat-image-wrapper">
          <img src={`../images/${image}`} alt="category name" />
        </div>
      </Link>
      <div>{/* the yello icon goes here */}</div>
    </figure>
  );
}

function CatContent({ title, description, price, category }) {
  return (
    <div className="cat-content">
      <h2 className="title">{title}</h2>
      <h3 className="artist">artist</h3>

      {price > 0 && <p className="price">{`$${price}`}</p>}
      <p className="media-type">CD box set</p>
      <div className="button-wrapper">
        <button className="button button--category button--100">
          add to basket
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
