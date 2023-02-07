import { useEffect } from "react";
import { useLocation } from "react-router";
import { Product } from "../components";

export function renderCarousel(product) {
  return <Product key={product.id} product={product} showbtn={false} />;
}

export function renderCarouselWithButton(product) {
  return <Product key={product.id} product={product} showbtn={true} />;
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
}
