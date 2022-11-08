import React from "react";
import { Link } from "react-router-dom";

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
    <figure className="cat-image">
      <Link to={`/category/${category}`} className="cat-link">
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
      <h2 className="cat-title">{title}</h2>
      {description.length > 0 && <p>{description}</p>}
      {price > 0 && <p>{`$${price}`}</p>}
      <p className="link-wrapper">
        <Link to={`/category/${category}`} className="button button--category">
          view all
        </Link>
      </p>
    </div>
  );
}
