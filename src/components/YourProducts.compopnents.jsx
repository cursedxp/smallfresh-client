import AddMoreProducts from "./AddMoreProducts.component";
import LikeButton from "./LikeButton.component";

export default function YourProducts(props) {
  const { products } = props;
  return (
    <div className="w-full bg-center">
      <h3 className="font-bold text-white text-2xl text-left mb-4">
        Products for you
      </h3>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        {products.map((product) => {
          return (
            <div
              key={product._id}
              className="product-card flex flex-col bg-white p-8 rounded-3xl  shadow-lg"
            >
              <img
                src={product.img}
                className="w-36 mb-8 self-center"
                alt={product.name}
              />
              <div className=" self-start text-xl">{product.name}</div>
              <div className="description self-start text-sm text-gray-400 mb-8 truncate w-40">
                {product.description}
              </div>
              <div className="self-end text-xl mb-4">
                {product.stock.price}
                <span> €</span>
              </div>
              <div className="flex justify-between">
                <LikeButton />
                <AddMoreProducts />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
