import { useState, useEffect } from "react";
import SearchBar from "../components/Search.component";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("http://localhost:5005/api/products")
      .then((products) => {
        setProducts(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrapper mx-auto max-w-screen-2xl">
      <div
        className="search-container m-4 rounded-3xl flex p-8 pt-12 "
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
          <div></div>
        </div>
      </div>
    </div>
  );
}
