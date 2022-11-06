import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetail.scss";
import { VscZoomIn } from "react-icons/vsc";
<<<<<<< HEAD
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
=======

import album from "../../assets/images/killing-me.webp";
import { Carousel, List, ListItem, Product, Social } from "../../components";

export default function ProductDetail() {
  const { products } = useSelector((state) => state);
  const [carouselProducts, setCarouselProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("products: ", products);
    const selectedProducts = products.slice(0, 20);
    setCarouselProducts(selectedProducts);
    console.log("carouselproducts: ", selectedProducts);
  }, [products]);
>>>>>>> develop

  return (
    <div class="container">
      <section className="section-album">
        <AlbumImage />
        <AlbumDescription />
      </section>
      <section className="section-add"></section>
      <section className="section-like">
<<<<<<< HEAD
        <Carousel render={renderCarousel} items={carouselProducts} />
=======
        <Carousel render={render} items={carouselProducts} />
>>>>>>> develop
      </section>
      <section className="section-details"></section>
    </div>
  );
}

<<<<<<< HEAD
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
=======
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
>>>>>>> develop
