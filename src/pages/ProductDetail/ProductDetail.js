import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ProductDetail.scss";
import { VscZoomIn } from "react-icons/vsc";
import { CSSTransition } from "react-transition-group";

import {
  AddToCart,
  Carousel,
  List,
  ListItem,
  RenderDelivery,
  RenderDescription,
  RenderDetails,
  RenderTrackList,
  Social,
  Tab,
  TabItem,
  Zoom,
} from "../../components";
import { useParams } from "react-router";
import { renderCarousel } from "../../utils/helper";

export default function ProductDetail() {
  const params = useParams();
  const { products } = useSelector((state) => state.modelData);
  const [carouselProducts, setCarouselProducts] = useState([]);

  const product = products.filter((p) => p.name === params.title)[0];
  console.log("product: ", product);

  useEffect(() => {
    const selectedProducts = products.slice(0, 20);
    setCarouselProducts(selectedProducts);
  }, [products]);

  return (
    <section className="detail-section">
      <div class="container">
        <section className="section-album">
          <AlbumImage image={product?.image} />
          <AlbumDescription product={product} />
        </section>
        <section className="section-add">
          <AddToCart product={product} />
        </section>
        <section className="section-like">
          <Carousel
            render={renderCarousel}
            items={carouselProducts}
            header="You Might Like..."
            groupSize={5}
          />
        </section>
      </div>
      <section className="section-details">
        <Tab>
          <TabItem name="Description" render={<RenderDescription />} />
          <TabItem name="Track Listing" render={<RenderTrackList />} />
          <TabItem name="Product Details" render={<RenderDetails />} />
          <TabItem name="Delivery and Returns" render={<RenderDelivery />} />
        </Tab>
      </section>
    </section>
  );
}

function AlbumImage({ image }) {
  const [open, setOpen] = useState(false);

  const openZoom = () => {
    setOpen(true);
  };

  const closeZoom = () => {
    console.log("Clicked");
    setOpen(false);
  };

  return (
    <div class="album-art">
      <div class="left">
        <CSSTransition
          in={open}
          timeout={{ enter: 400, exit: 400 }}
          className="image-slide"
          unmountOnExit
        >
          <Zoom image={`/images/${image}`} onClose={closeZoom} />
        </CSSTransition>

        {/* {open && <Zoom image={`/images/${image}`} onClose={closeZoom} />} */}
        <img src={`/images/${image}`} alt="album" />
        <button className="button icon-btn button-zoom" onClick={openZoom}>
          <VscZoomIn /> zoom
        </button>
      </div>
      <div class="right">
        <img src={`/images/${image}`} alt="album" />
      </div>
    </div>
  );
}

function AlbumDescription({ product }) {
  if (!product) return <div>No product</div>;

  return (
    <div class="album-description">
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>
      <div class="meta-info">
        <p className="price">${product.price}</p>
        <p>
          Buy now, pay with <span>Klarna.</span>
          <button className="link">Learn more</button>
        </p>
        <p>
          <span className="barcode">barcode:</span>
          <span>{product.barcode}</span>
        </p>
        <MetaDetail product={product} />
      </div>
      <div class="social-container">
        <span>Share:</span>
        <Social />
      </div>
    </div>
  );
}

function MetaDetail({ product }) {
  return (
    <div className="meta-detail">
      <List>
        <ListItem>
          Format: <span>CD Single</span>
        </ListItem>
        <ListItem>
          Category: <span>{product.category}</span>
        </ListItem>
        <ListItem>
          Released: <span>14th December 2021</span>
        </ListItem>
      </List>
    </div>
  );
}
