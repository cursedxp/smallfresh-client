import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import axios from "axios";
export default function EditProductModal(props) {
  const { product } = props;
  const [img, setImg] = useState(product.img);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [brand, setBrand] = useState(product.brand);
  const [description, setDescription] = useState(product.description);
  const [piece, setPiece] = useState(product.stock.piece);
  const [amount, setAmount] = useState(product.stock.amount);
  const [unit, setUnit] = useState(product.stock.unit);
  const [price, setPrice] = useState(product.stock.price);
  const [isBio, setIsBio] = useState(product.bio);

  return (
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
      >
        <div className="bg-white w-1/2 rounded-2xl p-4">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl text-left mb-4">{props.title}</h3>
            <button onClick={() => props.setShowEditModal(false)}>
              <XMarkIcon className="w-6 h-6"></XMarkIcon>
            </button>
          </div>
          <form className="w-full">
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-full mb-4">
                Product Image URL:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                  name="Image"
                  type="url"
                  value={img}
                  onChange={(e) => {
                    setImg(e.target.value);
                  }}
                ></input>
              </label>
              <label className=" font-bold flex flex-col w-full mb-4">
                Product Name:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-full mb-4">
                Description
                <textarea
                  className="appearance-none border rounded-xl h-36 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </label>
            </div>
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-full mb-4">
                Category:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </label>
              <label className=" font-bold flex flex-col w-full mb-4">
                Brand:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                  name="brand"
                  type="text"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                ></input>
              </label>
            </div>
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-full mb-4">
                Piece:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                  type="number"
                  name="piece"
                  value={piece}
                  onChange={(e) => {
                    setPiece(e.target.value);
                  }}
                />
              </label>
              <div className="flex gap-4 w-full">
                <label className=" font-bold flex flex-col w-full mb-4">
                  Amount:
                  <input
                    className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  ></input>
                </label>
                <label className=" font-bold flex flex-col w-full mb-4">
                  Unit:
                  <select
                    className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="unit"
                    value={unit}
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  >
                    <option value="gram">gram</option>
                    <option value="kilogram">kilogram</option>
                    <option value="piece">piece</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-1/2 mb-4 ">
                Price:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
                  name="productImage"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                ></input>
              </label>
              <label className=" font-bold flex flex-col mb-4">
                Bio:
                <input
                  type="checkbox"
                  name="isBio"
                  checked={isBio}
                  onChange={(e) => {
                    if (e.target.value === "on") {
                      setIsBio(true);
                    } else {
                      setIsBio(false);
                    }
                  }}
                />
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
