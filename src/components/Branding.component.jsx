import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

export default function NavBranding() {
  return (
    <div className="brand flex gap-4">
      <div className="brand-logo">
        <div className="w-14 h-14 rounded-full bg-red-700 flex justify-center">
          <BuildingStorefrontIcon className="h-6 w-6 text-white self-center"></BuildingStorefrontIcon>
        </div>
      </div>
      <div className="brand-name flex flex-col gap-1">
        <div className=" font-bold text-xl">Small Fresh</div>
        <div className="version flex items-center">
          <div className=" bg-slate-200 px-3 py-1 rounded-2xl">
            <div className="text-sm text-gray-500">BETA</div>
          </div>
          <span className="text-sm text-gray-400 ml-2">Version</span>
        </div>
      </div>
    </div>
  );
}
