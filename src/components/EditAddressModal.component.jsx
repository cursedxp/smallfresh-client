import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function EditAddressModal(props) {
  const { address, updateAddress } = props;
  const [addressType, setAddressType] = useState(address.addressType);
  const [street, setStreet] = useState(address.street);
  const [city, setCity] = useState(address.city);
  const [state, setState] = useState(address.state);
  const [zip, setZip] = useState(address.zip);
  const [description, setDescription] = useState(address.description);
  const [latitude, setLatitude] = useState(address.latitude);
  const [longitude, setLongitude] = useState(address.longitude);
  const [isDefault, setIsDefault] = useState(address.isDefault);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(address?._id);

    const updatedAddress = {
      addressType: addressType,
      street: street,
      city: city,
      state: state,
      description: description,
      longitude: longitude,
      latitude: latitude,
      isDefault: isDefault,
    };

    updateAddress(address?._id, updatedAddress);
    props.setShowEditForm(false);
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
      >
        <div className="bg-white w-1/2 rounded-2xl p-4">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl text-left mb-4">Edit Arress</h3>
            <button
              onClick={() => {
                props.setShowEditForm(false);
              }}
            >
              <XMarkIcon className="w-6 h-6"></XMarkIcon>
            </button>
          </div>

          <form onSubmit={handleUpdate} className="w-full">
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-full mb-4">
                Address Type:
                <select
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="addressType"
                  value={addressType}
                  onChange={(e) => {
                    setAddressType(e.target.value);
                  }}
                >
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className=" font-bold flex flex-col w-full mb-4">
                Street:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="street"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-full mb-4">
                City:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </label>

              <label className=" font-bold flex flex-col w-full mb-4">
                State:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="state"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className=" font-bold flex flex-col w-full mb-4">
                ZIP Code:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="zip"
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                />
              </label>

              <label className=" font-bold flex flex-col w-full mb-4">
                Description:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="flex gap-4 ">
              <label className=" font-bold flex flex-col w-full">
                Latitude:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="latitude"
                  value={latitude}
                  onChange={(e) => {
                    setLatitude(e.target.value);
                  }}
                />
              </label>

              <label className=" font-bold flex flex-col w-full mb-4">
                Longitude:
                <input
                  className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="coordinates.longitude"
                  value={longitude}
                  onChange={(e) => {
                    setLongitude(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="flex gap-4 w-full">
              <label className=" font-bold flex flex-col mb-4">
                Is Default:
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={isDefault}
                  onChange={(e) => {
                    if (e.target.value === "on") {
                      setIsDefault(true);
                    } else {
                      setIsDefault(false);
                    }
                  }}
                />
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
