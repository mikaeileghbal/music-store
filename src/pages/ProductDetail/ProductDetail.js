import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetail.scss";
import { VscZoomIn } from "react-icons/vsc";

import album from "../../assets/images/killing-me.webp";
import { Carousel, List, ListItem, Product, Social } from "../../components";

export default function ProductDetail() {
  const { products } = useSelector((state) => state.modelData);
  const [carouselProducts, setCarouselProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedProducts = products.slice(0, 20);
    setCarouselProducts(selectedProducts);
  }, [products]);

  return (
    <div class="container">
      <section className="section-album">
        <AlbumImage />
        <AlbumDescription />
      </section>
      <section className="section-add"></section>
      <section className="section-like">
        <Carousel render={render} items={carouselProducts} />
      </section>
      <section className="section-details"></section>
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

function render(product) {
  return (
    <Product
      category={product.category}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
    />
  );
}
