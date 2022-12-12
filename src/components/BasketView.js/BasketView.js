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
      <table className="basket__table">
        <tbody>
          {cart.map(({ product, qty }) => (
            <tr key={product.id}>
              <td>
                <button onClick={() => handleRemove(product)}>
                  <FaTimes />
                </button>
              </td>
              <td className="image__column">
                <img src={`images/${product.image}`} alt={product.name} />
              </td>
              <td>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </td>
              <td>{product.price}</td>
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
              <td>{product.price * qty}</td>
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
        </tbody>
      </table>
    </section>
  );
}
