import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ProductDetail.scss";
import { VscZoomIn } from "react-icons/vsc";

import album from "../../assets/images/killing-me.webp";
import {
  Carousel,
  List,
  ListItem,
  Product,
  RenderTrackList,
  Social,
  Tab,
  TabItem,
} from "../../components";

export default function ProductDetail() {
  const { products } = useSelector((state) => state.modelData);
  const [carouselProducts, setCarouselProducts] = useState([]);

  useEffect(() => {
    const selectedProducts = products.slice(0, 20);
    setCarouselProducts(selectedProducts);
  }, [products]);

  return (
    <>
      <div class="container">
        <section className="section-album">
          <AlbumImage />
          <AlbumDescription />
        </section>
        <section className="section-add"></section>
        <section className="section-like">
          <Carousel render={renderCarousel} items={carouselProducts} />
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
    </>
  );
}

function AlbumImage() {
  return (
    <div class="album-art">
      <div class="left">
        <img src={album} alt="album" />
        <button className="button icon-btn button-zoom">
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
      <div class="social-container">
        <span>Share:</span>
        <Social />
      </div>
    </div>
  );
}

function MetaDetail() {
  return (
    <div className="meta-detail">
      <List>
        <ListItem>
          Format: <span>CD Single</span>
        </ListItem>
        <ListItem>
          Category: <span>K-pop</span>
        </ListItem>
        <ListItem>
          Released: <span>14th December 2021</span>
        </ListItem>
      </List>
    </div>
  );
}

function renderCarousel(product) {
  return (
    <Product
      key={product.id}
      category={product.category}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      showbtn={false}
    />
  );
}

function RenderDescription() {
  return (
    <p>
      Music from the motion picture 'Top Gun: Maverick', featuring the singles
      'Hold My Hand' by Lady Gaga and 'I Ain't Worried' by OneRepublic. With a
      combination of classics from the original film, new music, and score, the
      album reflects 'Top Gun''s past, present, and future all at once. It
      boasts instantly recognisable cuts such as the theme song 'Danger Zone' by
      Kenny Loggins, while 'Top Gun: Maverick' star Miles Teller recorded a
      show-stopping live rendition of 'Great Balls of Fire' showcased in the
      film and included on the record. Plus, it features original score tracks
      by the movie's composers - Lorne Balfe, Harold Faltermeyer and Academy
      Award winners Lady Gaga and Hans Zimmer. The Soundtrack seamlessly
      continues the musical legacy the original 'Top Gun' ignited back in 1986.
    </p>
  );
}

function RenderDetails() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>No. of discs</td>
            <td>1 disc(s)</td>
          </tr>
          <tr>
            <td>Formsat</td>
            <td>Vinyl</td>
          </tr>
          <tr>
            <td>Label</td>
            <td>Interscope</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function RenderDelivery() {
  return (
    <div>
      <strong>When will my order arrive?</strong>
      <p>
        If the items are in stock, we’ll aim to dispatch them within 24 hours of
        your order being placed. Orders sent via Royal Mail 48® are usually
        received within two to five working days, including Saturdays. Orders
        sent via the Express Delivery service will be dispatched the same day if
        ordered by 2pm, Monday to Friday (excluding public holidays). We will
        aim to dispatch pre-orders so that you receive them on the release date.
        Where an item is 'Back in stock soon', we'll aim to receive more stock
        within a week and will dispatch any orders once the shipment has
        arrived. Certain items can take longer to source than the estimated
        week, particularly during busy trading periods and may take longer to
        arrive at our warehouse. In this instance, we'll send weekly updates to
        keep you aware. Royal Mail strike updates - As you have no doubt seen,
        Royal Mail will be striking on Saturday 12th November and Monday 14th
        November and as such, we are expecting there to be a few delays with
        delivery as a result of these. Don’t worry though, we’ll continue to
        dispatch your orders and will get them to you as soon as we can! Thanks
        for your patience and understanding in the meantime.
      </p>
      <strong>Delivery charges</strong>
      <p>
        Free delivery is available for most items when the order exceeds £20,
        but any exceptions will be clearly highlighted. Selected items are only
        available for delivery via the Royal Mail 48® service and other items
        are available for delivery using this service for a charge. Selected
        items are only available for delivery using Click & Collect to an hmv or
        FOPP store of your choice. All delivery options and any charges that are
        applicable will be shown at the checkout.
      </p>
      <strong>Will you tell me when my order is on its way?</strong>
      <p>
        We will email you as soon as each item is ready to be dispatched so you
        know when to expect them, but you can also check the status of your
        order in your account. We don’t always ship everything together so check
        your dispatch email for more details - we’ll send you a dispatch email
        per parcel. If your order contains items that are out of stock, we’ll
        ship the in-stock items as soon as we can and will dispatch the
        out-of-stock items as soon as we’ve received more stock in the
        warehouse. For items that are dispatched using our standard service, we
        ask that you wait 14 days from the date of dispatch before reporting any
        items as undelivered. Returns We’re happy to accept returns for unwanted
        items, provided that they are returned within 14 days of receipt;
        unopened, unused, and in perfect condition. Some exclusions apply,
        please visit our Help Centre for more details. Royal Mail strike updates
        - As you have no doubt seen, Royal Mail will be striking on Saturday
        12th November and Monday 14th November and as such, we are expecting
        there to be a few delays with delivery as a result of these. Don’t worry
        though, we’ll continue to process any returns as soon as they arrive
        back with us and we thank you for your patience and understanding in the
        meantime.
      </p>
    </div>
  );
}
