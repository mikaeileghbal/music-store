import { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { CategoryItem, FilterMenu } from "../../components";
import { DataTypes } from "../../data/Types";
import { loadData } from "../../data/ActionCreators";

import "./CategoryDetail.css";
import { useState } from "react";

const mapStateProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  loadData,
};

const CategoryDetail = connect(
  mapStateProps,
  mapDispatchToProps
)(CategoryDetailPresentation);

function CategoryDetailPresentation({ products, loadData }) {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  console.log(products);

  useEffect(() => {
    loadData(DataTypes.PRODUCTS);
  }, [loadData]);

  useEffect(() => {
    setItems(products.filter((product) => product.category === category));
    console.log(items);
  }, [category]);

  return (
    <div className="category-detail container">
      <div className="category-header">
        <h2>{category}</h2>
      </div>
      <div className="container category">
        <div className="sidebar">
          <FilterMenu />
          <FilterMenu />
          <FilterMenu />
          <div className="button-wrapper">
            <button className="button button--category button--filter">
              apply
            </button>
            <button className="button button--category button--filter">
              clear all
            </button>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="category">
              {items?.map((p) => (
                <CategoryItem
                  key={p.id}
                  title={p.name}
                  image={p.image}
                  category={p.category}
                  description={p.description}
                  price={p.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
