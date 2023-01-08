import { useSelector } from "react-redux";
import { BasketView } from "../../components";

export default function Basket() {
  const { cartData } = useSelector((state) => state);

  return <BasketView />;
}
