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
import { Carousel, Product } from "../../components";

import { useDispatch, useSelector } from "react-redux";

export default function ProductDetail() {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  const carouselProducts = products.splice(0, 20);

  console.log("carouselproducts: ", carouselProducts);

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
        <Carousel render={renderCarousel} items={carouselProducts} />
      </section>
      <section className="section-details"></section>
    </div>
  );
}

function renderCarousel(p) {
  return (
    <Product
      key={p.id}
      title={p.name}
      image={p.image}
      category={p.category}
      description={p.description}
      price={p.price}
      to={`/${p.name}`}
    />
  );
}
