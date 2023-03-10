import NavBranding from "./Branding.component";
import UserMenu from "./UserMenu.component";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopContext } from "../context/shop.context";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(ShopContext);

  return (
    <nav className="navigation w-full p-4 flex justify-between">
      <Link to="/">
        <NavBranding />
      </Link>
      <div className="nav-context flex gap-6 items-center">
        {isLoggedIn && (
          <>
            <UserMenu />

            <Link
              className="flex gap-2 items-center hover:shadow-xl h-10 hover:text-red-700 rounded-full px-2"
              to="/myproducts"
            >
              <HeartIcon className="w-6 h-6 text-red-700 stroke-2" />
              <span>My products</span>
            </Link>
          </>
        )}
        {!isLoggedIn && (
          <>
            <div className="user h-10 hover:text-red-700 rounded-full gap-2 flex items-center">
              <div className="mr-4 text-red-700">
                <Link to="/signup">Sign Up</Link>
                <span className="mx-2">/</span>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
