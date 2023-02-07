import React, { useContext, useState, useEffect, createContext } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { isSelected } from "../../utils/hooks";

import FilterMenu from "../FilterMenu/FilterMenu";
import "./Sidebar.scss";

const SidebarContext = createContext({});

export const useSidebar = () => useContext(SidebarContext);

export default function Sidebar() {
  const [groupSelection, setGroupSelection] = useState({});
  const [selected, setSelected] = useState(false);
  const { filterMenu } = useSelector((state) => state.stateData);
  const [serachParams, setSearchParams] = useSearchParams({});

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

  const buildQueryString = (searchObject) => {
    let params = Object.entries(searchObject);

    params = params.filter((item) =>
      Object.keys(item[1]).length === 0 ? null : item
    );
    console.log("params: ", params);
    let string = {};
    params.forEach((item) => {
      console.log(item);
      string = {
        ...string,
        [item[0]]: Object.keys(item[1]).reduce((result, item) => {
          return `${result},${item}`;
        }),
      };
    });
    console.log(string);
    setSearchParams(string);
  };

  useEffect(() => {
    setSelected(isSelected(groupSelection));
    buildQueryString(groupSelection);
  }, [groupSelection]);

  const providerValue = { groupSelection, handleGroupSelection, clearAll };

  return (
    <SidebarContext.Provider value={providerValue}>
      <div className="sidebar">
        <FilterMenu MenuItems={filterMenu.genre} name="genre" />
        <FilterMenu MenuItems={filterMenu.format} name="format" />
        <FilterMenu MenuItems={filterMenu.artist} name="artist" />
        <FilterMenu MenuItems={filterMenu.date} name="date" />
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
