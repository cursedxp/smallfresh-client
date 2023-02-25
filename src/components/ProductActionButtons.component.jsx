import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
export default function ProductActionButtons(props) {
  const { product } = props;
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/products/${product._id}`)
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex">
      <button className="px-4 flex gap-2 items-center text-red-700">
        <PencilSquareIcon className="w-6 h-6" /> <span>Edit</span>
      </button>
      <button
        onClick={handleDelete}
        className="px-4 flex gap-2 items-center text-red-700"
      >
        <TrashIcon className="w-6 h-6" /> <span>Delete</span>
      </button>
    </div>
  );
}
