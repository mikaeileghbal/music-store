import React from "react";
import { Children } from "react";
import { useState } from "react";
import "./Tab.scss";

export default function Tab({ children }) {
  const [active, setActive] = useState(children[0].props.name);

  const items = Children.toArray(children);

  return (
    <div>
      <div>
        {items.map((item) => (
          <button
            key={item.props.name}
            onClick={(e) => setActive(item.props.name)}
          >
            {item.props.name}
          </button>
        ))}
      </div>
      <div>{items.filter((item) => item.props.name === active)}</div>
    </div>
  );
}
