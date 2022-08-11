import { useEffect } from "react";
import { connect } from "react-redux";

import { loadData } from "../../data/ActionCreators";
import { DataTypes } from "../../data/Types";

import CategoryItem from "../CategoryItem/CategoryItem";
import "./Category.css";

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  loadData,
};

const Category = connect(mapStateToProps, mapDispatchToProps)(CategoryPresent);

function CategoryPresent({ categories, loadData }) {
  useEffect(() => {
    loadData(DataTypes.CATEGORIES);
  }, [loadData]);

  return (
    <div className="container">
      <div className="content">
        <div className="category">
          {categories?.map((category) => (
            <CategoryItem
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
