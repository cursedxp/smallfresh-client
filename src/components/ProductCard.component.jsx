import LikeButton from "./LikeButton.component";
import AddMoreProducts from "./AddMoreProducts.component";

export default function ProductCard(props) {
  const { product } = props;
  return (
    <div
      key={product._id}
      className="product-card flex flex-col bg-white p-8 rounded-3xl shadow-lg"
    >
      <img
        src={product.img}
        className="w-36 mb-8 self-center"
        alt={product.name}
      />
      <div className=" self-start text-xl">{product.name}</div>
      <div className="description self-start text-sm text-gray-400 w-40 mb-8 truncate  ">
        {product.description}
      </div>
      <div className="self-end text-xl mb-6">
        {product.stock.price}
        <span> €</span>
      </div>
      <div className="flex justify-between">
        <LikeButton />
        <AddMoreProducts />
      </div>
    </div>
  );
}
