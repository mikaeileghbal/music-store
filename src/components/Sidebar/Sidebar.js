import React, { useContext, useState, useEffect, createContext } from "react";
import { isSelected } from "../../utils/hooks";

import FilterMenu from "../FilterMenu/FilterMenu";
import "./Sidebar.scss";

const MenuItems = [
  "Rock & Pop",
  "Metal",
  "R&B & Soul",
  "K-pop",
  "Reggae",
  "General",
  "Classical",
  "Dance",
  "Country",
];

const selection = {
  date: {
    "k-pop": "true",
    rock: "true",
  },
  genre: {
    pop: "true",
  },
};

const SidebarContext = createContext({});

export const useSidebar = () => useContext(SidebarContext);

export default function Sidebar() {
  const [groupSelection, setGroupSelection] = useState({});
  const [selected, setSelected] = useState(false);

  const handleGroupSelection = (selected, name) => {
    setGroupSelection({
      ...groupSelection,
      [name]: { ...groupSelection[name], [selected]: true },
    });
  };

  const clearAll = () => {
    // setSelection({});
    // setGroupSelection({});
  };

  const removeUncheckedItems = (list) => {
    for (const key in list) {
      if (!list[key]) delete list[key];
    }
    return list;
  };

  useEffect(() => {
    // console.log("group selection:", groupSelection);
    // setSelected(isSelected(groupSelection));
  }, [groupSelection]);

  useEffect(() => {
    //handleGroupSelection(selection);
  }, [selection]);

  return (
    <SidebarContext.Provider
      value={{
        groupSelection,
        handleGroupSelection,
        clearAll,
      }}
    >
      <div className="sidebar">
        <FilterMenu MenuItems={MenuItems} name="genre" />
        <FilterMenu MenuItems={MenuItems} name="format" />
        <FilterMenu MenuItems={MenuItems} name="date" />
        <FooterButtons selected={selected} />
      </div>
    </SidebarContext.Provider>
  );
}

function FooterButtons({ selected }) {
  const { clearAll } = useSidebar();

  return (
    <div className="button-wrapper">
      <FooterButton text="apply" disabled={false} flat="button--flat" />
      <FooterButton text="clear all" disabled={!selected} clearAll={clearAll} />
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
