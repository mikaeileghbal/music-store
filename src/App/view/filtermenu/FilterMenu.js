import React from "react";
import "./filtermenu.css";

export default function FilterMenu() {
  return (
    <section className="filter-menu card">
      <h3>Genere</h3>
      <div>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              Pop
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Rock
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Folk
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Jazz
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Blues
            </label>
          </li>
        </ul>
        <button type="button" className="button button--filter">
          More...
        </button>
      </div>
    </section>
  );
}
