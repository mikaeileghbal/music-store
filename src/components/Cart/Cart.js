import React from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../data/cartActionCreators";
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
      <CartControlBody onClose={onClose} />
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

function CartControlBody({ onClose }) {
  const { cartData } = useSelector((state) => state);

  return (
    <div className="cart__control__body">
      <section>
        <header></header>
        <CartProducts cartData={cartData} />
        <CartSummary onClose={onClose} />
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

function CartProducts({ cartData }) {
  console.log("cart products:", cartData);

  if (!cartData) return <div>No data</div>;
  return (
    <div>
      {cartData &&
        cartData.cart?.map((item) => (
          <Product
            key={item.product.id}
            product={item.product}
            qty={item.qty}
          />
        ))}
    </div>
  );
}

function CartSummary({ onClose }) {
  const { cartPrice } = useSelector((state) => state.cartData);

  const navigate = useNavigate();

  const gotoBasket = () => {
    onClose();
    navigate("/basket");
  };

  return (
    <footer>
      <Table item={{ title: "subtotal:", amount: cartPrice }} />
      <Table
        item={{ title: "total (inc.VAT)", amount: cartPrice + cartPrice * 0.2 }}
        strong={true}
      />
      <div className="button__wrap">
        <button
          className="button button--category button--flat"
          onClick={gotoBasket}
        >
          <span>view basket & checkout</span>
          <span>
            <MdOutlineKeyboardArrowRight size={24} />
          </span>
        </button>
      </div>
    </footer>
  );
}

function Table({ item, strong }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{strong ? <strong>{item.title}</strong> : <>{item.title}</>}</td>
          <td>
            {strong ? (
              <strong>${item.amount.toFixed(2)}</strong>
            ) : (
              <>${item.amount.toFixed(2)}</>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Product({ product, qty }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart__product">
      <div className="cart_product__image">
        <img src={`/images/${product.image}`} alt={product.name} />
      </div>
      <div className="cart__product_info">
        <p className="cart__product__info__name">
          <Link to={`/cd/${product.name}`}>{product.name}</Link>
        </p>
        <p className="cart__product__info__price">${product.price}</p>
        <p className="cart__product__info__qty">Quantity: {qty}</p>
      </div>
      <div className="cart__product__remove">
        <button onClick={handleRemove}>
          <FaTimes size={14} />
        </button>
      </div>
    </div>
  );
}
