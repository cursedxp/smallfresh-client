import LikeButton from "./LikeButton.component";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddCounter from "./AddCounter.component";
import AddItemButton from "./AddItemButton.component";
import { useContext } from "react";
import { ShopContext } from "../context/shop.context";

export default function ProductCard(props) {
  const { basket, setBasket } = useContext(ShopContext);

  const { product } = props;
  const [count, setCount] = useState(0);

  const handleAddItem = () => {
    setCount(count + 1);
  };
  const handleRemoveItem = () => {
    if (count > 0) {
      setCount(count - 1);
      setBasket(count);
    }
  };

  useEffect(() => {
    setBasket(count);
  }, [count]);

  return (
    <div className="product-card flex flex-col bg-white p-8 rounded-3xl shadow-lg">
      <Link
        to={{
          pathname: `/products/${product._id}`,
          state: {
            count: count,
          },
        }}
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
        <LikeButton product={product} />
        <div>
          {count > 0 ? (
            <AddCounter
              count={count}
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
          ) : (
            <AddItemButton onClick={handleAddItem} />
          )}
        </div>
      </div>
    </div>
  );
}
