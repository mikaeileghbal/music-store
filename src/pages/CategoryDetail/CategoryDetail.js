import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Product, Sidebar } from "../../components";
import { DataTypes } from "../../data/Types";
import { loadData } from "../../data/ActionCreators";
import "./CategoryDetail.scss";
import Options from "../../components/Options/Options";
import Pager from "../../components/Pager/Pager";

function CategoryDetail() {
  const { products } = useSelector((state) => state.modelData);
  const dispatch = useDispatch();
  const { category } = useParams();

  const items = products?.filter((product) => product.category === category);

  useEffect(() => {
    dispatch(loadData(DataTypes.PRODUCTS));
  }, [dispatch]);

  return (
    <section className="category-detail container">
      <div className="category-header">
        <h2 className="page-title">{category}</h2>
        <p className="result">Showing 1-24 of 3376 results</p>
      </div>
      <div className="container category">
        <Sidebar />
        <div className="">
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
