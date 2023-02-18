import NavBranding from "./Branding.component";
import UserMenu from "./UserMenu.component";
import Cart from "./Cart.component";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopContext } from "../context/shop.context";

export default function NavBar() {
  return (
    <nav className="navigation w-full p-4 flex justify-between">
      <NavBranding />
      <div className="nav-context flex gap-6 items-center">
        <UserMenu />
        <div className="flex gap-2 items-center hover:shadow-xl h-10 hover:text-red-700 rounded-full px-4 cursor-pointer">
          <HeartIcon className="w-6 h-6 text-red-700 stroke-2" />
          <span>My products</span>
        </div>
        <Cart />
      </div>
    </nav>
  );
}
