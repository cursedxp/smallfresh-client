import NavBranding from "./Branding.component";
import UserMenu from "./UserMenu.component";

export default function NavBar() {
  return (
    <nav className="navigation w-full p-4 flex justify-between">
      <NavBranding />
      <div className="nav-context flex items-center">
        <UserMenu />
      </div>
    </nav>
  );
}
