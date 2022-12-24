import { Product } from "../components";

export function renderCarousel(product) {
  return (
    <Product
      key={product.id}
      category={product.category}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      showbtn={false}
    />
  );
}
