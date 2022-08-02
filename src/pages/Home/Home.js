import { CategoryItem } from "../../components";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <h1>Home</h1>
        </div>
        <div className="category">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </div>
  );
}
