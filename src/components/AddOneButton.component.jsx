import { ShoppingCartIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function AddOneButton() {
  return (
    <div className="flex px-4 py-3 gap-2 bg-red-700 rounded-xl w-20 items-center text-white hover:cursor-pointer">
      <ShoppingCartIcon className="w-6 h-6" />
      <PlusIcon className="w-6 h-6" />
    </div>
  );
}
