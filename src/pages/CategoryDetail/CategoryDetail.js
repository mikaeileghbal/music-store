import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Product, Sidebar } from "../../components";
import { DataTypes } from "../../data/Types";
import { loadData } from "../../data/ActionCreators";

import "./CategoryDetail.scss";
import { useState } from "react";
import Options from "../../components/Options/Options";
import Pager from "../../components/Pager/Pager";

function CategoryDetail() {
  const { products } = useSelector((state) => state.modelData);
  const dispatch = useDispatch();
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(loadData(DataTypes.PRODUCTS));
  }, [loadData]);

  useEffect(() => {
    setItems(products.filter((product) => product.category === category));
  }, [category]);

  return (
    <section className="category-detail container">
      <div className="category-header">
        <h2 className="page-title">{category}</h2>
      </div>
      <div className="container category">
        <Sidebar />
        <div className="container">
          <Options />
          <div className="content">
            <div className="category">
              {items?.map((p) => (
                <Product key={p.id} product={p} to={`/${p.name}`} />
              ))}
            </div>
            <Pager pageCount={10} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryDetail;
