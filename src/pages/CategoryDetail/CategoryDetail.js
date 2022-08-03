import { FilterMenu } from "../../components";
import "./category.css";

export default function Home() {
  return (
    <div className="container category">
      <div className="sidebar">
        <FilterMenu />
        <FilterMenu />
        <FilterMenu />
      </div>
      <div className="content">
        <div className="card">Filter ribbon</div>
        <div className="card">albums goes here</div>
      </div>
    </div>
  );
}
