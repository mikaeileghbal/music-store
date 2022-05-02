import React from "react";
import { Navigate, useNavigate } from "react-router";
import "./catgoryitem.css";

export default function CategoryItem() {
  const navigate = useNavigate();

  const showCategory = (e) => {
    console.log("clicked");
    navigate(`/category:1`);
  };

  return (
    <div className="card">
      <h3>Category name</h3>
      <img src="./images/category-1.jpg" alt="category name" />
      <p>lorem ipsum 15 lorem ipsum 15 lorem ipsum 15 lorem ipsum 15</p>
      <button
        type="button"
        className="button button--category"
        onClick={showCategory}
      >
        See more...
      </button>
    </div>
  );
}
