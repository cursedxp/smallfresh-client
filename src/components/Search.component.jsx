import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function SearchBar(props) {
  const { products } = props;
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (searchText) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltered(filteredProducts);
  };

  return (
    <div className="rounded-2xl relative bg-white self-start h-14 pl-4 shadow-md">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="search"
          value={searchValue}
          placeholder="Search a product"
          onChange={(e) => {
            const searchText = e.target.value;
            setSearchValue(searchText);
            handleInputChange(searchText);
          }}
          className="outline:none focus:ring-0 focus:ring-offset-0 w-96 border-none h-14"
        />
        <button
          type="submit"
          className="rounded-2xl bg-red-700 h-14 px-8 text-white focus:"
        >
          <MagnifyingGlassIcon className="text-white w-6 h-6" />
        </button>
      </form>

      {searchValue === "" ? null : (
        <div
          className="product-list absolute w-full left-0 flex flex-col bg-white p-4 rounded-3xl shadow-2xl overflow-scroll"
          style={{ height: "324px" }}
        >
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product._id}
                className="p-4 border-b border-b-gray-100 flex gap-4 hover:bg-slate-200 rounded-2xl cursor-pointer"
              >
                <img src={product.img} className="w-16" alt={product.name} />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between text-lg w-ful truncate">
                    <div>{product.name}</div>
                    <div>
                      {product.stock.price}
                      <span> €</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 ">
                    <span>{product.description}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center flex flex-col justify-center h-full">
              <div> Could not find the product.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
