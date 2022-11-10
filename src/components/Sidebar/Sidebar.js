import React, { useContext, useState, useEffect, createContext } from "react";
import { useSelector } from "react-redux";
import { isSelected } from "../../utils/hooks";

import FilterMenu from "../FilterMenu/FilterMenu";
import "./Sidebar.scss";

const SidebarContext = createContext({});

export const useSidebar = () => useContext(SidebarContext);

export default function Sidebar() {
  const [groupSelection, setGroupSelection] = useState({});
  const [selected, setSelected] = useState(false);
  const { filterMenu } = useSelector((state) => state.stateData);
  console.log("filtermenu", filterMenu);

  const handleGroupSelection = (selected, name) => {
    setGroupSelection({
      ...groupSelection,
      [name]: removeUncheckedItems({ ...groupSelection[name], ...selected }),
    });
  };

  const clearAll = () => {};

  const removeUncheckedItems = (list) => {
    for (const key in list) {
      if (!list[key]) delete list[key];
    }
    return list;
  };

  useEffect(() => {
    setSelected(isSelected(groupSelection));
    console.log(groupSelection);
  }, [groupSelection]);

  const providerValue = { groupSelection, handleGroupSelection, clearAll };

  return (
    <SidebarContext.Provider value={providerValue}>
      <div className="sidebar">
        <FilterMenu MenuItems={filterMenu.date} name="genre" />
        <FilterMenu MenuItems={filterMenu.genre} name="format" />
        <FilterMenu MenuItems={filterMenu.year} name="date" />
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
