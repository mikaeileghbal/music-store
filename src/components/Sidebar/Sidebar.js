import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useSelection } from "../../utils/hooks";
import FilterMenu from "../FilterMenu/FilterMenu";
import "./Sidebar.scss";

export default function Sidebar() {
  const { isSelected, handleSelected, clearAll } = useSelection();

  return (
    <div className="sidebar">
      <FilterMenu onSelected={handleSelected} id={0} />
      <FilterMenu onSelected={handleSelected} id={1} />
      <FilterMenu onSelected={handleSelected} id={2} />
      <FooterButtons isSelected={isSelected} clearAll={clearAll} />
    </div>
  );
}

function FooterButtons({ isSelected, clearAll }) {
  return (
    <div className="button-wrapper">
      <FooterButton text="apply" disabled={false} />
      <FooterButton
        text="clear all"
        disabled={!isSelected}
        clearAll={clearAll}
      />
    </div>
  );
}

function FooterButton({ disabled, text, clearAll }) {
  return (
    <button
      disabled={disabled}
      className="button button--category button--filter"
      onClick={clearAll}
    >
      {text}
    </button>
  );
}
