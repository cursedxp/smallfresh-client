import NavBranding from "./Branding.component";
import UserMenu from "./UserMenu.component";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  return (
    <nav className="navigation w-full p-4 flex justify-between">
      <NavBranding />
      <div className="nav-context flex gap-4 items-center">
        <UserMenu />
        <div>
          <div className="cart h-10 pl-4 rounded-full flex items-center cursor-pointer border-2 border-red-700 ">
            <ShoppingCartIcon className="w-6 h-6  text-red-700" />
            <div className="px-3 pointer-events-none">
              3.50
              <span className="pl-1">€</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
