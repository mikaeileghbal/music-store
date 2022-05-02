import React from "react";
import { useNavigate } from "react-router";
import "./catgoryitem.css";

export default function CategoryItem() {
  const navigate = useNavigate();

  const showCategory = (e) => {
    console.log("clicked");
    navigate(`/category:1`);
  };

  return (
    <div className="card">
      <img src="./images/category-1.jpg" alt="category name" />
      <h3>Category name</h3>
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
