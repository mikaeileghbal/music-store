import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
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
      </div>
    </header>
  );
}
