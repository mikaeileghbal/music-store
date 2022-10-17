import React, { useContext, useState, useEffect, createContext } from "react";
import { isSelected } from "../../utils/hooks";

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

const SidebarContext = createContext({});

export const useSidebar = () => useContext(SidebarContext);

export default function Sidebar() {
  const [groupSelection, setGroupSelection] = useState({});

  const handleGroupSelection = (selection, name) => {
    setGroupSelection({ ...groupSelection, [name]: selection });
  };

  const clearAll = () => {
    setGroupSelection({});
  };

  useEffect(() => {
    console.log(groupSelection);
  }, [groupSelection]);

  return (
    <SidebarContext.Provider
      value={{ groupSelection, handleGroupSelection, clearAll }}
    >
      <div className="sidebar">
        <FilterMenu MenuItems={MenuItems} name="genre" />
        <FilterMenu MenuItems={MenuItems} name="format" />
        <FilterMenu MenuItems={MenuItems} name="date" />
        <FooterButtons />
      </div>
    </SidebarContext.Provider>
  );
}

function FooterButtons() {
  const { groupSelection, clearAll } = useSidebar();

  return (
    <div className="button-wrapper">
      <FooterButton text="apply" disabled={false} flat="button--flat" />
      <FooterButton
        text="clear all"
        disabled={!isSelected(groupSelection)}
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
