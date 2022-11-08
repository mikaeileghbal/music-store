import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadData } from "../../data/ActionCreators";
import { DataTypes } from "../../data/Types";
import { CategoryItem } from "../../components";

import "./Category.scss";

export default function Category() {
  const categories = useSelector((state) => state.modelData.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(DataTypes.CATEGORIES));
  }, [loadData]);

  return (
    <div className="cat-container container">
      <div className="content">
        <div className="category">
          {categories?.map((category) => (
            <CategoryItem
              key={category.id}
              title={category.title}
              image={category.image}
              category={category.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
