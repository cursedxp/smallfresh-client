import ProductCard from "./ProductCard.component";
import { Link } from "react-router-dom";

export default function YourProducts(props) {
  const { products } = props;

  return (
    <div className="w-full bg-center">
      <h3 className="font-bold text-white text-2xl text-left mb-4">
        Products for you
      </h3>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}
