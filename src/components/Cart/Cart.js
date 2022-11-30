import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Cart.scss";

export default function Cart({ onToggleCart }) {
  const onClose = (e) => {
    onToggleCart();
  };

  return (
    <div className="cart__container">
      <div className="cart__inner" onClick={onClose}></div>
      <CartControl onClose={onClose} />
    </div>
  );
}

function CartControl({ onClose }) {
  return (
    <div className="cart__control">
      <CartControlHeader onClose={onClose} />
      <CartControlBody />
      <CartControlFooter onClose={onClose} />
    </div>
  );
}

function CartControlHeader({ onClose }) {
  return (
    <div className="cart__control__header">
      <span>Close</span>
      <button
        className="button button--category button--flat"
        onClick={onClose}
      >
        <FaTimes size={20} fontWeight={200} fontStyle="normal" />
      </button>
    </div>
  );
}

function CartControlBody() {
  return (
    <div className="cart__control__body">
      <section>
        <header></header>
        <CartProducts
          products={[
            { id: 1, title: "products1" },
            { id: 2, title: "product2" },
          ]}
        />
        <CartSummary />
      </section>
    </div>
  );
}

function CartControlFooter({ onClose }) {
  return (
    <div className="cart__control__footer">
      <span>Close</span>
      <button
        className="button button--category button--flat"
        onClick={onClose}
      >
        <FaTimes size={20} fontWeight={200} fontStyle="normal" />
      </button>
    </div>
  );
}

function CartProducts({ products }) {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

function CartSummary() {
  return (
    <footer>
      <Table item={{ title: "subtotal:", amount: 29.0 }} />
      <Table item={{ title: "total", amount: 29.0 }} />
      <div className="button__wrap">
        <button className="button button--category button--flat">
          <span>view basket & checkout</span>
          <span>&gt;</span>
        </button>
      </div>
    </footer>
  );
}

function Table({ item }) {
  return (
    <table>
      <tr>
        <td>{item.title}</td>
        <td>{item.amount}</td>
      </tr>
    </table>
  );
}

function Product({ product }) {
  return <div>{product.title}</div>;
}
