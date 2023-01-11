import React from "react";
import { useSelector } from "react-redux";
import CartNotify from "../CartNotify/CartNotify";

export default function Notification() {
  const { showCartNotify } = useSelector((state) => state.stateData);

  return <>{showCartNotify && <CartNotify />}</>;
}
