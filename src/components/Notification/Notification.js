import React from "react";
import { useSelector } from "react-redux";
import CartNotify from "../CartNotify/CartNotify";
import { CSSTransition } from "react-transition-group";
import "./Notification.scss";

export default function Notification() {
  const { showCartNotify } = useSelector((state) => state.stateData);

  return (
    <div>
      <CSSTransition
        in={showCartNotify}
        timeout={{ enter: 400, exit: 400 }}
        classNames="notify-slide"
        unmountOnExit
      >
        <CartNotify />
      </CSSTransition>
    </div>
  );
}
