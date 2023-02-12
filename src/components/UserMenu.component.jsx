import {
  UserCircleIcon,
  QueueListIcon,
  MapPinIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function UserMenu() {
  const [showMenu, setShowMenu] = useState(false);

  //Toggles the state
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  //Checks menu is open and user clicks outside
  const handleClickOutside = (event) => {
    if (showMenu && !event.target.closest(".menu")) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="menu relative">
      <div
        onClick={handleClick}
        className="user h-10 bg-slate-200 rounded-full flex items-center cursor-pointer"
      >
        <UserCircleIcon className="w-10 h-10 text-red-700" />
        <div className="px-3 font-bold">John Doe</div>
      </div>
      {showMenu && (
        <div className="context-menu z-10 absolute top-10 w-48 right-0 p-4 text-left rounded-2xl bg-white shadow-md">
          <ul className="text-slate-400">
            <li className="flex gap-2 rounded-lg p-2 hover:bg-slate-100 hover:text-red-700 hover:font-bold">
              <QueueListIcon className="w-6 h-6 " />
              Orders
            </li>
            <li className="mt-4 flex gap-2 rounded-lg p-2 hover:bg-slate-100 hover:text-red-700 hover:font-bold">
              <MapPinIcon className="w-6 h-6" />
              Addresses
            </li>
            <li className="mt-4 flex gap-2 rounded-lg p-2 hover:bg-slate-100 hover:text-red-700 hover:font-bold">
              <Cog6ToothIcon className="w-6 h-6 " />
              Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
