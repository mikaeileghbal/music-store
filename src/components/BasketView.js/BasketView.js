import React from "react";
import { FaTimes } from "react-icons/fa";
import "./BasketView.scss";

export default function BasketView({ cartData }) {
  const { cart, cartPrice, cartItems } = cartData;
  return (
    <div className="basket__container">
      <BasketProducts cart={cart} />
      <BasketDetails cartItems={cartItems} cartPrice={cartPrice} />
    </div>
  );
}

function BasketProducts({ cart }) {
  return (
    <section className="basket__products">
      <table className="basket__table">
        <tbody>
          {cart.map(({ product, qty }) => (
            <tr key={product.id}>
              <td>
                <button>
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
              <td>{qty}</td>
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
      {cartItems} {cartPrice.toFixed(2)}{" "}
      {(cartPrice + cartPrice * 0.2).toFixed(2)}
    </section>
  );
}
