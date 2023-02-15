import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function AddCounter() {
  const [piece, setPiece] = useState(0);

  return (
    <div className="add-many-button flex ">
      <button
        className="bg-red-700 p-3 rounded-l-xl text-white"
        onClick={() => {
          setPiece((prevPiece) => {
            return prevPiece + -1;
          });
        }}
      >
        <MinusIcon className="w-6 h-6" />
      </button>
      <input type="text" value={piece} className="w-12 text-right text-lg" />
      <button
        className="bg-red-700 p-3 rounded-r-xl text-white"
        onClick={() => {
          setPiece((prevPiece) => {
            return prevPiece + 1;
          });
        }}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
