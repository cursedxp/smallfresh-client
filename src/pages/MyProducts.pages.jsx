import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/shop.context";
import Products from "../components/Products.component";
import axios from "axios";

export default function MyProducts() {
  const [myProducts, setMyProducts] = useState([]);
  const { isLoggedIn, user, logOutUser } = useContext(ShopContext);

  const getMyProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/myproducts/${user._id}`)
      .then((response) => {
        setMyProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (user) {
      getMyProducts();
    }
  }, []);

  return (
    <div className=" wrapper mx-auto max-w-screen-2xl">
      <div
        className="container m-4 rounded-3xl  items-star flex flex-col p-8  "
        style={{
          height: 200,

          backgroundImage: `url("https://images.unsplash.com/photo-1587393855524-087f83d95bc9")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="font-bold text-white text-4xl text-left mb-2">
          Your Favorite Products
        </h1>
        <p
          className=" text-white text-xl text-left mb-6"
          style={{ maxWidth: "800px" }}
        >
          Keep track of all your favorite items in one place! Click the heart
          icon next to a product to add it to your favorites list. You can view
          and purchase your favorite products at any time by visiting this page.
          Happy shopping!
        </p>
      </div>
      <div>
        <Products products={myProducts}></Products>
      </div>
    </div>
  );
}
