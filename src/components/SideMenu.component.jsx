import { Link } from "react-router-dom";
import {
  QueueListIcon,
  MapPinIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function SideMenu() {
  return (
    <div className="flex p-4 rounded-2xl shadow-xl w-72 m-4">
      <ul className="flex flex-col gap-4 w-full">
        <li>
          <Link
            to="/orders"
            className="flex gap-4 rounded-lg p-2 hover:text-red-700  hover:bg-slate-100"
          >
            <QueueListIcon className="w-6 h-6" />
            Orders
          </Link>
        </li>
        <li>
          <Link
            to="/addresses"
            className="flex gap-4 rounded-lg p-2 hover:text-red-700  hover:bg-slate-100"
          >
            <MapPinIcon className="w-6 h-6" />
            Addresses
          </Link>
        </li>
        <li>
          <Link
            to="/user/settings"
            className="flex gap-4 rounded-lg p-2 hover:text-red-700  hover:bg-slate-100"
          >
            <Cog6ToothIcon className="w-6 h-6" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
