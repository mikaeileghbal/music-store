import React from "react";
import { Children } from "react";
import { useState } from "react";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import "./Tab.scss";

export default function Tab({ children }) {
  const [active, setActive] = useState(children[0].props.name);

  const items = Children.toArray(children);

  const getClassName = (name) => {
    return name === active ? "tab__button active" : "tab__button";
  };
  return (
    <div className="tab__container">
      <div className="tab__button__wrap container">
        <List>
          {items.map((item) => (
            <ListItem key={item.props.name}>
              <h3
                className={getClassName(item.props.name)}
                onClick={(e) => setActive(item.props.name)}
              >
                {item.props.name}
              </h3>
            </ListItem>
          ))}
        </List>
      </div>
      <div className="tab__content__wrap ">
        <div className="tab__content__container container">
          {items.filter((item) => item.props.name === active)}
        </div>
      </div>
    </div>
  );
}
