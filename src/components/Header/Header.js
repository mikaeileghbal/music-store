import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const links = [
  { href: "/", text: "home" },
  { href: "/basket", text: "basket" },
];

export default function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const onToggleSearch = (e) => {
    setToggleSearch(!toggleSearch);
  };

  const onToggleCart = (e) => {
    setToggleCart((old) => !old);
  };

  return (
    <header className="App-header">
      <div className="container">
        <Link to="/" className="logo">
          music store
        </Link>
        <Nav />
        <div className="button-container">
          {toggleSearch && <Search />}
          <ButtonHeader onClick={onToggleSearch}>
            {toggleSearch ? <FaTimes /> : <FaSearch />}
          </ButtonHeader>
          <ShoppingCart onToggleCart={onToggleCart} />
        </div>
      </div>
      {toggleCart && <Cart onToggleCart={onToggleCart} />}
    </header>
  );
}

function ShoppingCart({ onToggleCart }) {
  const { cartData } = useSelector((state) => state);
  console.log("cartData:", cartData);
  return (
    <ButtonHeader onClick={onToggleCart} className="button-cart">
      <FaShoppingCart />
      {cartData?.cartItems > 0 && (
        <span className="cart-items">{cartData.cartItems}</span>
      )}
    </ButtonHeader>
  );
}

function LinkItem({ text, href }) {
  return (
    <li>
      <NavLink to={href} activeClassName="active">
        {text}
      </NavLink>
    </li>
  );
}

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search site"
        onChange={handleSearch}
      />
      <button type="button" className="button button--header button--search">
        <FaSearch />
      </button>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <LinkItem key={index} href={link.href} text={link.text} />
        ))}
      </ul>
    </nav>
  );
}

function ButtonHeader({ children, onClick }) {
  return (
    <button type="button" className="button button--header" onClick={onClick}>
      {children}
    </button>
  );
}
