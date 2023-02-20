import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../components/LikeButton.component";
import AddCounter from "../components/AddCounter.component";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  const getProduct = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/${productId}`)
      .then((product) => {
        setProduct(product.data);
        console.log(product.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper mx-auto max-w-screen-2xl">
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          <img
            src={product.img}
            className="h-auto border p-4 rounded-3xl"
            style={{ maxWidth: "560px" }}
            alt=""
          />
          <div className="flex flex-col">
            <h3 className="text-4xl mb-8">{product.name}</h3>
            <div className="text-3xl mb-2">
              {product.stock.price}
              <span> €</span>
            </div>
            <div className=" text-gray-400 mb-8">{product.description}</div>
            <div className="flex">
              <LikeButton />
              <AddCounter className="ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
