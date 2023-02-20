import ProductCard from "./ProductCard.component";
import { Link } from "react-router-dom";

export default function Products(props) {
  const { products } = props;
  return (
    <div className="w-full bg-center">
      <div className="grid grid-cols-4 gap-4 gap-y-8">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
