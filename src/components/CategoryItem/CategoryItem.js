import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./CatgoryItem.css";

export default function CategoryItem({
  image,
  category,
  title,
  price = 0,
  description = "",
}) {
  const navigate = useNavigate();

  const showCategory = (e) => {
    console.log("clicked");
    e.preventDefault();
    navigate(`/category:1`);
  };

  return (
    <article className="card">
      <figure className="cat-image">
        <Link to={`/category/${category}`} className="cat-link">
          <div className="cat-image-wrapper">
            <img src={`../images/${image}`} alt="category name" />
          </div>
        </Link>
        <div>{/* the yello icon goes here */}</div>
      </figure>
      <div className="cat-content">
        <h2>{title}</h2>
        {description.length > 0 && <p>{description}</p>}
        {price > 0 && <p>{`$${price}`}</p>}
        <p>
          <Link
            to={`/category/${category}`}
            className="button button--category"
          >
            view all
          </Link>
        </p>
      </div>
    </article>
  );
}
