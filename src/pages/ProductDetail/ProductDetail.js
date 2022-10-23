import React from "react";
import "./ProductDetail.scss";
import { VscZoomIn } from "react-icons/vsc";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import album from "../../assets/images/killing-me.webp";
import { Carousel } from "../../components";
import { useSelection } from "../../utils/hooks";

import { useDispatch } from "react-redux";

export default function ProductDetail() {
  const products = useSelection((state) => state);
  const dispatch = useDispatch();

  console.log("products: ", products);

  return (
    <div class="container">
      <section className="section-album">
        <div class="album-art">
          <div class="left">
            <img src={album} alt="album" />
            <button className="button icon-btn">
              <VscZoomIn /> zoom
            </button>
          </div>
          <div class="right">
            <img src={album} alt="album" />
          </div>
        </div>
        <div class="album-description">
          <h1>killing me</h1>
          <h2>chungha</h2>
          <div class="info-meta">
            <p className="price">$34.99</p>
            <p>
              Buy now, pay with <span>Klarna.</span>
              <button className="link">Learn more</button>
            </p>
            <p>
              <span className="barcode">barcode:</span>
              <span>8809704423894</span>
            </p>
            <ul className="meta-detail">
              <li>
                Format: <span>CD Single</span>
              </li>
              <li>
                Category: <span>K-pop</span>
              </li>
              <li>
                Released: <span>14th December 2021</span>
              </li>
            </ul>
          </div>
          <div class="social-wrapper">
            <span>Share:</span>
            <ul className="social">
              <li>
                <a href="" className="social-icon linkedin">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="" className="social-icon linkedin">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="" className="social-icon linkedin">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="" className="social-icon linkedin">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-add"></section>
      <section className="section-like">
        <Carousel render={render} items={items} />
        <Carousel render={render2} items={items2} />
      </section>
      <section className="section-details"></section>
    </div>
  );
}

function render(item) {
  return (
    <div className="carousel-group" key={item}>
      <h1 className="carousel-item">{item}</h1>
      <h1 className="carousel-item">{item}</h1>
      <h1 className="carousel-item">{item}</h1>
      <h1 className="carousel-item">{item}</h1>
      <h1 className="carousel-item">{item}</h1>
    </div>
  );
}

function render2(item) {
  return (
    <div className="carousel-group" key={item}>
      <img src={`./images/${item}`} alt="likes" />
    </div>
  );
}

const items = ["1", "2", "3", "4"];
const items2 = [
  "3vinyl55_feature_panel.webp",
  "blackpink-fp.webp",
  "flash50_feature_panel.webp",
  "now_feature-panel.webp",
];
