import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../data/cartActionCreators";
import "./AddToCart.scss";

export default function AddToCart({ product }) {
  console.log("product in addtocart:", product);
  return (
    <div className="add__container">
      <InfoBlock />
      <ControlBlock product={product} />
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

function ControlBlock({ product }) {
  return (
    <div className="add__block controls">
      <div className="row">
        <Controls product={product} />
        <DeliveryInfo />
      </div>
    </div>
  );
}

function Controls({ product }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setQty(e.target.value);
  };

  const onSubmit = (e) => {
    if (e.target.value === "+") setQty((old) => Math.min(Number(old) + 1, 99));
    else setQty((old) => Math.max(Number(old) - 1, 1));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product, qty));
  };

  return (
    <div className="col">
      <div className="quantity">
        <label>QTY</label>
        <div className="controls__wrap">
          <input type="submit" value="-" className="down" onClick={onSubmit} />
          <input
            type="number"
            className="number"
            value={qty}
            onChange={onChange}
            min="1"
            max="99"
          />
          <input type="submit" value="+" className="up" onClick={onSubmit} />
        </div>
      </div>
      <div className="button__wrap">
        <button
          className="button button--flat button__add"
          onClick={handleAddToCart}
        >
          ADD TO BASKET <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

function DeliveryInfo() {
  return (
    <div className="col delivery">
      <p>
        Delivery to the UK only
        <br />
        <strong>Free UK delivery</strong> on orders over £20
      </p>
      <small>Usually dispatched within 24 hours</small>
    </div>
  );
}
