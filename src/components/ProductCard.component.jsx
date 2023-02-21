import LikeButton from "./LikeButton.component";
import AddMoreProducts from "./AddMoreProducts.component";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;
  return (
    <div className="product-card flex flex-col bg-white p-8 rounded-3xl shadow-lg">
      <Link
        to={{ pathname: `/products/${product._id}`, state: { product } }}
        className="flex flex-col"
      >
        <img src={product.img} alt={product.name} />
        <div className=" self-start text-xl">{product.name}</div>
        <div className="description self-start text-sm text-gray-400 w-40 mb-8 truncate  ">
          {product.description}
        </div>
        <div className="self-end text-xl mb-6">
          {product.stock.price}
          <span> €</span>
        </div>
      </Link>
      <div className="flex justify-between">
        <LikeButton />
        <AddMoreProducts />
      </div>
    </div>
  );
}
