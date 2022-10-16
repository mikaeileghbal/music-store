import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useSelection } from "../../utils/hooks";
import FilterMenu from "../FilterMenu/FilterMenu";
import "./Sidebar.scss";

const MenuItems = [
  "Rock & Pop",
  "Metal",
  "R&B & Soul",
  "  K-pop",
  "Reggae",
  "General",
  "Classical",
  "Dance",
  "Country",
];

export default function Sidebar() {
  const { isSelected, handleSelected, clearAll } = useSelection();

  return (
    <div className="sidebar">
      <FilterMenu MenuItems={MenuItems} onSelected={handleSelected} id={0} />
      <FilterMenu MenuItems={MenuItems} onSelected={handleSelected} id={1} />
      <FilterMenu MenuItems={MenuItems} onSelected={handleSelected} id={2} />
      <FooterButtons isSelected={isSelected} clearAll={clearAll} />
    </div>
  );
}

function FooterButtons({ isSelected, clearAll }) {
  return (
    <div className="button-wrapper">
      <FooterButton text="apply" disabled={false} flat="button--flat" />
      <FooterButton
        text="clear all"
        disabled={!isSelected}
        clearAll={clearAll}
      />
    </div>
  );
}

function FooterButton({ disabled, text, clearAll, flat }) {
  return (
    <button
      disabled={disabled}
      className={`button button--category button--filter ${flat}`}
      onClick={clearAll}
    >
      {text}
    </button>
  );
}
