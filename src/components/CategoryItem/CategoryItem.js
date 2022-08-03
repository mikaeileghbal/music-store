import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./catgoryitem.css";

export default function CategoryItem({ image, title }) {
  const navigate = useNavigate();

  const showCategory = (e) => {
    console.log("clicked");
    e.preventDefault();
    navigate(`/category:1`);
  };

  return (
    <article className="card">
      <figure className="cat-image">
        <Link to={`/category/${title}`}>
          <div>
            <img src={`./images/${image}`} alt="category name" />
          </div>
        </Link>
        <div>{/* the yello icon goes here */}</div>
      </figure>
      <div className="cat-content">
        <h2>{title}</h2>
        <p>
          <Link to={`/category/${title}`} className="button button--category">
            view all
          </Link>
        </p>
      </div>
    </article>
  );
}
