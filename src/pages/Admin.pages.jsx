import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/shop.context";
import AddNewProduct from "../components/AddNewProductModal.component";
import EditProductModal from "../components/EditProductModal.component";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Admin() {
  const { user } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const updateProduct = (productId, updatedProduct) => {
    if (!productId && updatedProduct) {
      console.log("Product ID is undefined or Missing Product details");
      return;
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/products/${productId}`, {
        name: updatedProduct.name,
        brand: updatedProduct.brand,
        img: updatedProduct.img,
        category: updatedProduct.category,
        description: updatedProduct.updatedProduct,
        bio: updatedProduct.bio,
        piece: updatedProduct.stock.piece,
        amount: updatedProduct.stock.amount,
        unit: updatedProduct.stock.unit,
        price: updatedProduct.stock.price,
      })
      .then((response) => {
        const updatedProduct = response.data;
        const updatedProducts = products.map((product) => {
          if (product._id === productId) {
            return updatedProduct;
          } else {
            return product;
          }
        });
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (productId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/products/${productId}`)
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewProduct = () => {
    setShowAddModal(true);
  };
  const editProduct = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  useEffect(() => {
    if (user) {
      getProducts();
    }
  }, [user]);

  return (
    <div className=" wrapper mx-auto max-w-screen-2xl">
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
                  <div className="flex">
                    <button
                      className="px-4 flex gap-2 items-center text-red-700"
                      onClick={(e) => {
                        editProduct(product);
                      }}
                    >
                      <PencilSquareIcon className="w-6 h-6" /> <span>Edit</span>
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(product._id);
                      }}
                      className="px-4 flex gap-2 items-center text-red-700"
                    >
                      <TrashIcon className="w-6 h-6" /> <span>Delete</span>
                    </button>
                  </div>
                  {showEditModal && (
                    <EditProductModal
                      product={selectedProduct}
                      title={selectedProduct.name}
                      setShowEditModal={setShowEditModal}
                      updateProduct={updateProduct}
                    />
                  )}
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
