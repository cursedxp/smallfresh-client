import { useState, useEffect } from "react";
import SearchBar from "../components/Search.component";
import axios from "axios";
import YourProducts from "../components/YourProducts.compopnents";
import Products from "../components/Products.component";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [yourProducts, setYourProducts] = useState([]);

  const getProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then((products) => {
        setProducts(products.data);
        generateYourProducts(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateYourProducts = (products) => {
    const copyProducts = [...products];
    const randomProductArray = [];
    for (let index = 0; index < 5; index++) {
      const randomIndex = Math.floor(Math.random() * copyProducts.length);
      const randomProduct = copyProducts.splice(randomIndex, 1)[0];
      randomProductArray.push(randomProduct);
    }
    setYourProducts(randomProductArray);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrapper mx-auto max-w-screen-2xl">
      <div
        className="search-container m-4 rounded-3xl flex flex-col p-8 pt-12 "
        style={{
          height: 400,
          backgroundImage: `url("https://images.unsplash.com/photo-1506365069540-904bcc762636")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-4">
          <h2 className=" font-bold text-white text-5xl text-left ">
            Find Your Groceries Quickly and Easily
          </h2>
          <p
            className=" text-white text-xl text-left mb-6"
            style={{ maxWidth: "700px" }}
          >
            Looking for a specific product? Use our search feature to quickly
            find your favorite groceries. Just enter the name of the product and
            we'll do the rest!
          </p>
          <SearchBar products={products}></SearchBar>
        </div>
        <YourProducts products={yourProducts}></YourProducts>
      </div>
      <div className="products mt-96 px-12">
        <h3 className="font-bold text-2xl text-left mb-4">All Products</h3>

        <Products products={products}></Products>
      </div>
    </div>
  );
}
