import axios from "axios";
import { useState } from "react";

export default function Addresses() {
  const [addresses, setAddresses] = useState();

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between border-b">
        <h3 className="font-bold text-2xl text-left mt-4 mb-4 ">Addresses</h3>
        <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline">
          Add New
        </button>
      </div>
    </div>
  );
}
