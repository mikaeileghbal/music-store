import React from "react";
import "./FilterMenu.css";

export default function FilterMenu() {
  return (
    <section className="filter-menu card">
      <h3>Genre</h3>
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
        <div className="filter-menu-footer">
          <button
            type="button"
            className="button button--category button--filter"
          >
            see all
          </button>
        </div>
      </div>
    </section>
  );
}
