import { Link } from "react-router-dom";
import "./Header.scss";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = (e) => {
    setToggle(!toggle);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="App-header">
      <div className="container">
        <Link to="/" className="logo">
          music store
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/basket">basket</Link>
            </li>
            <li>
              <Link to="/album">album</Link>
            </li>
          </ul>
        </nav>
        <div className="button-container">
          {toggle && (
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                placeholder="Search site"
                onChange={handleSearch}
              />
              <button
                type="button"
                className="button button--header button--search"
              >
                <FaSearch />
              </button>
            </div>
          )}
          <button
            type="button"
            className="button button--header"
            onClick={toggleSearch}
          >
            {toggle ? <FaTimes /> : <FaSearch />}
          </button>
          <button type="button" className="button button--header">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
}
