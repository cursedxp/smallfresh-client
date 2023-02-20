import ProductCard from "./ProductCard.component";
import { Link } from "react-router-dom";

export default function Products(props) {
  const { products } = props;
  return (
    <div className="w-full bg-center">
      <div className="grid grid-cols-4 gap-4 gap-y-8">
        {products.map((product) => {
          return (
            <Link
              key={product._id}
              to={{ pathname: `/products/${product._id}`, state: { product } }}
            >
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
