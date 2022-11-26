import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Cart.scss";

export default function Cart({ onToggleCart }) {
  const onClose = (e) => {
    onToggleCart();
  };

  const onDummy = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="cart__container">
      <div className="cart__inner" onClick={onClose}></div>
      <div className="cart__control">
        <div className="cart__control__header">
          <span>Close</span>
          <button
            className="button button--category button--flat"
            onClick={onClose}
          >
            <FaTimes size={20} fontWeight={200} fontStyle="normal" />
          </button>
        </div>
        <div className="cart__control__body">
          <section>
            <header></header>
            <div>
              <table>
                <tr>
                  <td>subtotal:</td>
                  <td>29.00</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td>total</td>
                  <td>29.00</td>
                </tr>
              </table>
            </div>
            <footer></footer>
          </section>
        </div>
        <div className="cart__control__footer">
          <span>Close</span>
          <button
            className="button button--category button--flat"
            onClick={onClose}
          >
            <FaTimes size={20} fontWeight={200} fontStyle="normal" />
          </button>
        </div>
      </div>
    </div>
  );
}
