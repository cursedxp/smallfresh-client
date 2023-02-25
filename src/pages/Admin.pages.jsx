import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shop.context";
import AddNewProduct from "../components/AddNewProductModal.component";
import ProductActionButtons from "../components/ProductActionButtons.component";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const { isLoggedIn, user, logOutUser } = useContext(ShopContext);
  const [showAddModal, setShowAddModal] = useState(false);

  const getProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then((products) => {
        setProducts(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewProduct = () => {
    setShowAddModal(true);
  };

  useEffect(() => {
    if (user) {
      getProducts();
    }
  });

  return (
    <div className=" wrapper mx-auto max-w-screen-2xl">
      <div>Admin page</div>
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl text-left mt-4 mb-4 ">Products</h3>
        <button
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline"
          onClick={addNewProduct}
        >
          Add New
        </button>
      </div>
      <table className="table-auto w-full shadow-md rounded-2xl">
        <thead className="p-4 bg-gray-200">
          <tr>
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2">Product Name</th>
            <th className="px-2 py-2">Category</th>
            <th className="px-2 py-2">Brand</th>
            <th className="px-2 py-2">Bio</th>
            <th className="px-2 py-2">Piece</th>
            <th className="px-2 py-2">Amount</th>
            <th className="px-2 py-2">Unit</th>
            <th className="px-2 py-2">Price</th>
            <th className="px-2 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td className="border px-4 py-2 w-24">
                  <img src={product.img} alt="Product" />
                </td>
                <td className="border px-4 py-2">{product.name} </td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.brand}</td>
                <td className="border px-4 py-2">{product.bio ? "✅" : ""}</td>
                <td className="border px-4 py-2">{product.stock.piece}</td>
                <td className="border px-4 py-2">{product.stock.amount}</td>
                <td className="border px-4 py-2">{product.stock.unit}</td>
                <td className="border px-4 py-2">
                  {product.stock.price} <span> €</span>
                </td>
                <td className="border px-4 py-2">
                  <ProductActionButtons product={product} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showAddModal && (
        <AddNewProduct
          title={"Add new product"}
          setShowAddModal={setShowAddModal}
        />
      )}
    </div>
  );
}
