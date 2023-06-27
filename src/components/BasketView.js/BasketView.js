import React, { useState } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../data/cartActionCreators";
import { renderCarouselWithButton } from "../../utils/helper";
import Carousel from "../Carousel/Carousel";
import "./BasketView.scss";

const formatPrice = (price) => `$${price.toFixed(2)}`;

export default function BasketView() {
  return (
    <section className="basket__section">
      <div className="container">
        <BasketHeader />
        <div className="basket__container">
          <BasketProducts />
          <BasketDetails />
        </div>
      </div>
    </section>
  );
}

function BasketHeader() {
  return (
    <div className="basket__header">
      <h2 className="page-title">Basket</h2>
    </div>
  );
}

function BasketProducts() {
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    console.log("remove", product);
    dispatch(removeFromCart(product));
  };

  const handleUpdate = (product, qty) => {
    console.log({ product, qty });
  };

  return (
    <section className="basket__products">
      <BasketBanner />
      <BasketItems onRemove={handleRemove} onUpdate={handleUpdate} />
      <BasketSlide />
    </section>
  );
}

function BasketBanner() {
  const { cartPrice } = useSelector((state) => state.cartData);

  return (
    <div className="basket__banner">
      <p>
        Total to pay (inc. VAT):{" "}
        <span className="total">
          {formatPrice(cartPrice + cartPrice * 0.2)}
        </span>
      </p>
      <p className="discount">
        Free delivery on orders over <span>$20</span>
      </p>
      <p className="small">(View delivery options in checkout)</p>
    </div>
  );
}

function BasketItems({ onRemove, onUpdate }) {
  const { cart } = useSelector((state) => state.cartData);

  return (
    <table className="basket__table">
      <thead>
        <tr>
          <th colSpan={3}>Product</th>
          <th>Qty</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(({ product, qty }) => (
          <BasketItemRow
            key={product.id}
            product={product}
            qty={qty}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  );
}

function BasketItemRow({ product, qty, onUpdate, onRemove }) {
  return (
    <tr>
      <td>
        <button className="remove__button" onClick={() => onRemove(product)}>
          <span className="remove__icon">
            <FaTimes size={12} />
          </span>
          <span className="remove__text">REMOVE</span>
        </button>
      </td>
      <td className="image__column">
        <img src={`images/${product.image}`} alt={product.name} />
      </td>
      <td className="product__column">
        <h2>{product.name}</h2>
        <p>
          Unit price: <span>{formatPrice(product.price)}</span>
        </p>
      </td>
      <td>
        <div className="action__wrap">
          <input type="text" value={qty} name="qty" />
          <button className="update" onClick={() => onUpdate(product, qty)}>
            Update
          </button>
        </div>
      </td>
      <td className="price__column">{formatPrice(product.price * qty)}</td>
    </tr>
  );
}

function BasketDetails() {
  return (
    <section className="basket__detail">
      <div className="sticky">
        <DetailForm />
        <DetailLink />
        <DetailSubtotal />
        <DetailTotal />
        <DetailButtons />
        <DetailDelivery />
        <DetailPayment />
      </div>
    </section>
  );
}

function DetailForm() {
  return (
    <form className="discount">
      <label htmlFor="discount">Discount Code</label>
      <div className="detail__wrap">
        <input type="text" id="discount" name="discount" />
        <button className="button button--category button--flat" type="submit">
          apply
        </button>
      </div>
    </form>
  );
}

function DetailLink() {
  return (
    <div className="detail__wrap">
      <Link className="detail__link" to={`#`}>
        Been referred by a friend?
      </Link>
    </div>
  );
}

function DetailSubtotal() {
  const { cartPrice } = useSelector((state) => state.cartData);

  return (
    <div className="detail__wrap">
      <table className="subtotal__table">
        <tbody>
          <tr>
            <th>Subtotal:</th>
            <td>{formatPrice(cartPrice)}</td>
          </tr>
          <tr>
            <th>Tax:</th>
            <td>{formatPrice(cartPrice * 0.2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function DetailTotal() {
  const { cartPrice } = useSelector((state) => state.cartData);

  return (
    <div className="detail__wrap">
      <table className="total__table">
        <tbody>
          <tr>
            <th>Total to pay (inc. VAT):</th>
            <td>{formatPrice(cartPrice + cartPrice * 0.2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function DetailButtons() {
  return (
    <div className="detail__wrap detail__buttons">
      <button className="button button--category">
        proceed to guest checkout
      </button>
      <span>or</span>
      <button className="button button--category button--flat">
        sign in to checkout
      </button>
      <div className="detail__account">
        Need an acount?{" "}
        <Link className="detail__link" to={`#`}>
          Register now
        </Link>
      </div>
    </div>
  );
}

function DetailDelivery() {
  return (
    <div className="detail__wrap detail__delivery">
      <p>Free delivery on orders over $20</p>
    </div>
  );
}

function DetailPayment() {
  return (
    <div className="detail__wrap detail__methods">
      Secure payment with:
      <div className="method__container">
        <div className="method__item"></div>
        <div className="method__item"></div>
        <div className="method__item"></div>
        <div className="method__item"></div>
        <div className="method__item"></div>
        <div className="method__item"></div>
      </div>
    </div>
  );
}

function BasketSlide() {
  const { products } = useSelector((state) => state.modelData);

  return (
    <div className="basket__carousel">
      <Carousel
        items={products?.slice(0, 21)}
        render={renderCarouselWithButton}
        header="Before You Go..."
        groupSize={3}
      />
    </div>
  );
}
