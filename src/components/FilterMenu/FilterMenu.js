import React, { useState } from "react";
import { useEffect } from "react";
import "./FilterMenu.css";

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

export default function FilterMenu() {
  const [selections, setSelections] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (e, key) => {
    setSelections({ ...selections, [key]: e.target.checked });
  };

  useEffect(() => {
    setIsSelected(Object.values(selections).some((item) => item));
  }, [selections]);

  return (
    <section className="filter-menu card">
      <h3>Genre</h3>
      <div>
        <List>
          {MenuItems.map((item, i) => (
            <Item
              key={i}
              onChange={(args) => {
                console.log(i);
                handleSelected(args, i);
              }}
            >
              {item}
            </Item>
          ))}
        </List>
        <FilterMenuFooter isSelected={isSelected} />
      </div>
    </section>
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
