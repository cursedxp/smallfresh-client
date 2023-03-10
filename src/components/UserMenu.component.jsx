import {
  UserCircleIcon,
  QueueListIcon,
  MapPinIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "../context/shop.context";
import { useContext } from "react";

export default function UserMenu(props) {
  const { isLoggedIn, user, logOutUser } = useContext(ShopContext);
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
    <div className="menu relative ">
      <div
        onClick={handleClick}
        className="user h-10 hover:shadow-xl hover:text-red-700 rounded-full gap-2 flex items-center cursor-pointer"
      >
        <UserCircleIcon className="w-8 h-8 text-red-700" />
        <div className="mr-4 pointer-events-none">{user.firstName}</div>
      </div>
      {showMenu && (
        <div className="context-menu z-10 absolute top-10 w-44 right-0 p-4 text-left rounded-2xl bg-white shadow-md">
          <Link className="flex gap-4 rounded-lg p-2 hover:bg-slate-100 hover:text-red-700 ">
            <QueueListIcon className="w-6 h-6 " />
            Orders
          </Link>
          <Link
            to="/addresses"
            className="mt-4 flex gap-4 rounded-lg p-2 hover:bg-slate-100 hover:text-red-700 "
          >
            <MapPinIcon className="w-6 h-6" />
            Addresses
          </Link>
          <Link
            to="/user/settings"
            className="mt-4 flex gap-4 rounded-lg p-2 hover:bg-slate-100 hover:text-red-700"
          >
            <Cog6ToothIcon className="w-6 h-6 " />
            Settings
          </Link>
          <Link
            onClick={logOutUser}
            className="mt-4 flex gap-4 rounded-lg p-2 hover:bg-slate-100 hover:text-red-700"
          >
            <ArrowLeftOnRectangleIcon className="w-6 h-6 " />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
