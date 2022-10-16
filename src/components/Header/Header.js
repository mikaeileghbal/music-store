import { Link } from "react-router-dom";
import "./Header.scss";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState } from "react";

const links = [
  { href: "/", text: "home" },
  { href: "/basket", text: "basket" },
  { href: "/album", text: "album" },
];

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleSearch = (e) => {
    setToggle(!toggle);
  };

  return (
    <header className="App-header">
      <div className="container">
        <Link to="/" className="logo">
          music store
        </Link>
        <Nav />
        <div className="button-container">
          {toggle && <Search />}
          <ButtonHeader onClick={toggleSearch}>
            {toggle ? <FaTimes /> : <FaSearch />}
          </ButtonHeader>
          <ButtonHeader>
            <FaShoppingCart />
          </ButtonHeader>
        </div>
      </div>
    </header>
  );
}

function LinkItem({ text, href }) {
  return (
    <li>
      <Link to={href}>{text}</Link>
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
