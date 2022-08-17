import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

import "./Options.scss";

export default function Options() {
  return (
    <div className="options">
      <OptionView />
      <OptionPage />
      <OptionSort />
      <button className="button button--category button--filter button--flat">
        apply
      </button>
    </div>
  );
}

function OptionView() {
  return (
    <div className="option">
      <span className="title">view type:</span>
      <span>
        <button className="button button--option">
          <BsFillGrid3X3GapFill
            style={{
              background: "#f2f2f2",
              color: "#ec0577",
              fontSize: "16px",
            }}
          />
        </button>
        <button className="button button--option">
          <FaThList
            style={{
              background: "#f2f2f2",
              color: "#d4d6d9",
              fontSize: "16px",
            }}
          />
        </button>
      </span>
    </div>
  );
}

function OptionPage() {
  return (
    <div className="option">
      <span className="title">products per page:</span>
      <span>
        <select className="select--option" id="page">
          <option value="24">24</option>
          <option value="48">48</option>
          <option value="72">72</option>
        </select>
      </span>
    </div>
  );
}

function OptionSort() {
  return (
    <div className="option">
      <span className="title">sort by:</span>
      <span>
        <select className="select--option" id="sort">
          <option value="relevence">Relevence</option>
          <option value="price-asc">Price: low to heigh</option>
          <option value="price-des">Price: heigh to low</option>
          <option value="date">Release date</option>
          <option value="best">Best sellers</option>
        </select>
      </span>
    </div>
  );
}
