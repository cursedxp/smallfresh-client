import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export default function AddCounter(props) {
  const { count, onAdd, onRemove } = props;

  return (
    <div className="add-many-button flex">
      <button
        className="bg-red-700 p-2 rounded-l-xl text-white"
        onClick={onRemove}
      >
        <MinusIcon className="w-6 h-6" />
      </button>
      <input
        type="text"
        value={count}
        className="w-12 text-right text-lg"
        readOnly
      />
      <button
        className="bg-red-700 p-2 rounded-r-xl text-white"
        onClick={onAdd}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
