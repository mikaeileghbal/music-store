import React, { useState, useEffect, createContext, useContext } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useSidebar } from "../Sidebar/Sidebar";

import "./FilterMenu.scss";
import { isSelected } from "../../utils/hooks";

const FilterContext = createContext({});

const useFilter = () => useContext(FilterContext);

export default function FilterMenu({ MenuItems, name }) {
  const [selection, setSelection] = useState({});
  const [toggle, setToggle] = useState(true);
  const { handleGroupSelection } = useSidebar();

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  const handleSelection = (e) => {
    setSelection({ ...selection, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    handleGroupSelection(selection, name);
  }, [selection, name]);

  return (
    <FilterContext.Provider
      value={{ MenuItems, selection, handleToggle, handleSelection }}
    >
      <section className="filter-menu card">
        <header>
          <h3>Genre</h3>
          {toggle
            ? getArrow(handleToggle, true)
            : getArrow(handleToggle, false)}
        </header>
        {toggle ? <RenderList /> : ""}
      </section>
    </FilterContext.Provider>
  );
}

function getArrow(handleToggle, isOpen) {
  if (isOpen)
    return (
      <MdOutlineKeyboardArrowUp
        color="#ec0577"
        size={24}
        className="arrow"
        onClick={handleToggle}
      />
    );

  return (
    <MdOutlineKeyboardArrowDown
      color="#ec0577"
      size={24}
      className="arrow"
      onClick={handleToggle}
    />
  );
}

function RenderList() {
  const { MenuItems } = useFilter();

  return (
    <div>
      <List>
        {MenuItems.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </List>
      <FilterMenuFooter />
    </div>
  );
}

function List({ children }) {
  return <ul>{children}</ul>;
}

function Item({ children }) {
  const { selection, handleSelection } = useFilter();

  return (
    <li>
      <label>
        <input
          name={children}
          type="checkbox"
          onChange={(e) => handleSelection(e)}
          value={selection[children]}
        />
        {children}
      </label>
    </li>
  );
}

function FilterMenuFooter() {
  const { selection } = useFilter();

  return (
    <div className="filter-menu-footer">
      <FilterMenuButton isVisible={true} text="see all" />
      <FilterMenuButton isVisible={isSelected(selection)} text="apply" />
    </div>
  );
}

function FilterMenuButton({ isVisible, text }) {
  if (isVisible)
    return (
      <button type="button" className="button button--category button--filter">
        {text}
      </button>
    );
}
