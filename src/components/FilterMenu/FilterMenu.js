import React, { useState } from "react";
import { useEffect } from "react";
import { useSelection } from "../../utils/hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import "./FilterMenu.scss";

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

export default function FilterMenu({ onSelected, id }) {
  const [toggle, setToggle] = useState(true);
  const { handleSelected, isSelected } = useSelection();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    onSelected(isSelected, id);
  }, [isSelected]);

  return (
    <section className="filter-menu card">
      <header>
        <h3>Genre</h3>
        {toggle ? getArrow(handleToggle, true) : getArrow(handleToggle, false)}
      </header>
      {toggle ? renderList(handleSelected, isSelected) : ""}
    </section>
  );
}

function getArrow(onClick, isOpen) {
  if (isOpen)
    return (
      <MdOutlineKeyboardArrowUp
        color="#ec0577"
        size={24}
        className="arrow"
        onClick={onClick}
      />
    );

  return (
    <MdOutlineKeyboardArrowDown
      color="#ec0577"
      size={24}
      className="arrow"
      onClick={onClick}
    />
  );
}

function renderList(handleSelected, isSelected) {
  return (
    <div>
      <List>
        {MenuItems.map((item, i) => (
          <Item
            key={i}
            onChange={(args) => {
              handleSelected(args, i);
            }}
          >
            {item}
          </Item>
        ))}
      </List>
      <FilterMenuFooter isSelected={isSelected} />
    </div>
  );
}
function List({ children }) {
  return <ul>{children}</ul>;
}

function Item({ children, onChange }) {
  return (
    <li>
      <label>
        <input type="checkbox" onChange={(e) => onChange(e)} />
        {children}
      </label>
    </li>
  );
}

function FilterMenuFooter({ isSelected }) {
  return (
    <div className="filter-menu-footer">
      <FilterMenuButton isVisible={true} text="see all" />
      <FilterMenuButton isVisible={isSelected} text="apply" />
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
