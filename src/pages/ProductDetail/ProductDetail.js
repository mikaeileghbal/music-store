import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";
import { VscZoomIn } from "react-icons/vsc";

import album from "../../assets/images/killing-me.webp";
import { Carousel, List, ListItem, Product, Social } from "../../components";

import { useDispatch } from "react-redux";

export default function ProductDetail() {
  const { products } = useSelector((state) => state);
  const [carouselProducts, setCarouselProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedProducts = products.slice(0, 20);
    setCarouselProducts(selectedProducts);
    console.log("carouselproducts: ", carouselProducts);
  }, [products]);

  return (
    <div class="container">
      <section className="section-album">
        <AlbumImage />
        <AlbumDescription />
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

function AlbumImage() {
  return (
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
  );
}

function AlbumDescription() {
  return (
    <div class="album-description">
      <h1>killing me</h1>
      <h2>chungha</h2>
      <div class="meta-info">
        <p className="price">$34.99</p>
        <p>
          Buy now, pay with <span>Klarna.</span>
          <button className="link">Learn more</button>
        </p>
        <p>
          <span className="barcode">barcode:</span>
          <span>8809704423894</span>
        </p>
        <MetaDetail />
      </div>
      <div class="social-wrapper">
        <span>Share:</span>
        <Social />
      </div>
    </div>
  );
}

function MetaDetail() {
  return (
    <List className="meta-detail">
      <ListItem>
        Format: <span>CD Single</span>
      </ListItem>
      <ListItem>
        Category: <span>K-pop</span>
      </ListItem>
      <List>
        Released: <span>14th December 2021</span>
      </List>
    </List>
  );
}
