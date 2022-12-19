import { Banner, Category } from "../../components";

import "./Home.scss";

export default function Home() {
  return (
    <section className="home-section">
      <Banner />
      <Category />
    </section>
  );
}
