import React from "react";
import "./AddToCart.scss";

export default function AddToCart() {
  return (
    <div className="add__container">
      <InfoBlock />
      <ControlBlock />
    </div>
  );
}

function ControlBlock() {
  return (
    <div className="add__block controls">
      <div className="row">
        <Controls />
        <DeliveryInfo />
      </div>
    </div>
  );
}

function InfoBlock() {
  return (
    <div className="add__block info">
      <div className="row">
        <div className="col">
          <div className="col__heading">Click & Collect</div>
          <p className="col__description">
            Get it delivered to a store near you with FREE Click & Collect
            available on this product.{" "}
          </p>
        </div>
        <div className="col">
          <div className="col__heading">Ring & Reserve</div>
          <p className="col__description">
            Can't wait to get your hands on this? Ring to reserve at your local
            store, subject to availability:
          </p>
        </div>
        <div className="col">Icon</div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="col">
      <div className="quantity">
        <label>QTY</label>
        <div className="controls__wrap">
          <input type="submit" value="-" className="down" />
          <input type="number" className="number" value="1" min="1" max="99" />
          <input type="submit" value="+" className="up" />
        </div>
      </div>
      <div className="button__wrap">
        <button className="button button--flat button__add">
          ADD TO BASKET
        </button>
      </div>
    </div>
  );
}

function DeliveryInfo() {
  return (
    <div className="col">
      <p>
        Delivery to the UK only
        <br />
        <strong>Free UK delivery</strong> on orders over £20
      </p>
      <small>Usually dispatched within 24 hours</small>
    </div>
  );
}
