import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSelection } from "../../utils/hooks";

import "./CatgoryItem.scss";

export default function CategoryItem({
  image,
  category,
  title,
  price = 0,
  description = "",
}) {
  return (
    <article className="card">
      <CatImage image={image} category={category} />
      <CatContent
        title={title}
        description={description}
        price={price}
        category={category}
      />
    </article>
  );
}

function CatImage({ image, category }) {
  return (
    <Link to={`/${category}`} className="cat-link">
      <figure className="cat-image">
        <img src={`../images/${image}`} alt="category name" />
        <div>{/* the yello icon goes here */}</div>
      </figure>
    </Link>
  );
}

function CatContent({ title, description, price, category }) {
  return (
    <div className="cat-content">
      <h2 className="cat-title">{title}</h2>
      {description.length > 0 && <p>{description}</p>}
      {price > 0 && <p>{`$${price}`}</p>}
      <p className="link-wrapper">
        <Link to={`/${category}`} className="button button--category">
          <span>view all</span>
          <MdOutlineKeyboardArrowRight size={24} />
        </Link>
      </p>
    </div>
  );
}
