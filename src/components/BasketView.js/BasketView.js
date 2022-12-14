import React, { useState } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../data/cartActionCreators";
import "./BasketView.scss";

export default function BasketView({ cartData }) {
  const { cart, cartPrice, cartItems } = cartData;
  return (
    <section className="basket__section">
      <BasketHeader />

      <div className="basket__container">
        <BasketProducts cart={cart} />
        <BasketDetails cartItems={cartItems} cartPrice={cartPrice} />
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

function BasketBanner() {
  return (
    <div className="basket__banner">
      <p>
        Total to pay (inc. VAT): <span className="total">$91.20</span>
      </p>
      <p className="discount">
        Free delivery on orders over <span>$20</span>
      </p>
      <p className="small">(View delivery options in checkout)</p>
    </div>
  );
}

function BasketProducts({ cart }) {
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    console.log(product);
    dispatch(removeFromCart(product));
  };

  const handleUpdate = (product, qty) => {
    console.log({ product, qty });
  };

  return (
    <section className="basket__products">
      <BasketBanner />
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
            <tr key={product.id}>
              <td>
                <button
                  className="remove__button"
                  onClick={() => handleRemove(product)}
                >
                  <span className="remove__icon">
                    <FaTimes />
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
                  Unit price: <span>${product.price.toFixed(2)}</span>
                </p>
              </td>
              <td>
                <div className="action__wrap">
                  <input type="text" value={qty} name="qty" />
                  <button
                    className="update"
                    onClick={() => handleUpdate(product, qty)}
                  >
                    update
                  </button>
                </div>
              </td>
              <td className="price__column">
                ${(product.price * qty).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function BasketDetails({ cartItems, cartPrice }) {
  return (
    <section className="basket__detail">
      <table className="basket__detail__table">
        <tbody>
          <tr>
            <th>Item count</th>
            <td>{cartItems}</td>
          </tr>
          <tr>
            <th>Subtotal</th>
            <td>${cartPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Total (Inc VAT)</th>
            <td>${(cartPrice + cartPrice * 0.2).toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <button className="button button--category button--flat">
                Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
