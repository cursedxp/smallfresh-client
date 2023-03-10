import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/shop.context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import EditAddressModal from "../components/EditAddressModal.component";

export default function Addresses() {
  const { user } = useContext(ShopContext);
  const [addresses, setAddresses] = useState([]);
  const [addressType, setAddressType] = useState("Home");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState(Number);
  const [longitude, setLongitude] = useState(Number);
  const [isDefault, setIsDefault] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const getAddresses = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/myaddresses/user/${user?._id}`)
      .then((response) => {
        setAddresses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateAddress = (addressId, updatedAddress) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/myaddresses/user/${user._id}/${addressId}`,
        updatedAddress
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/myaddresses`, {
        addressType,
        street,
        city,
        state,
        zip,
        description,
        isDefault,
        userId: user._id,
      })
      .then((response) => {
        console.log(response);
        setShowForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
    getAddresses();
  };

  const handleDelete = async (addressId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/myaddresses/user/${user._id}/${addressId}`
      );
      console.log(response.data);
      getAddresses();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      getAddresses();
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between border-b border-gray-300">
        <h3 className="font-bold text-2xl text-left mt-4 mb-4 ">Addresses</h3>
        <button
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New
        </button>
      </div>
      {addresses.length <= 0 ? (
        <div className=" bg-gray-200 p-4 my-4 rounded-2xl text-center text-gray-500">
          You do not have any address yet. Why dont you create one?
        </div>
      ) : (
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          {addresses.map((address) => {
            return (
              <div
                key={address._id}
                className="flex flex-col p-4 border border-gray-300 rounded-2xl text-sm mt-4 hover:bg-gray-200"
              >
                <div>{address.street}</div>
                <div>{address.city}</div>
                <div>{address.state}</div>
                <div>{address.zip}</div>
                <div className="text-gray-400">{address.description}</div>
                <div className="my-4">
                  <ul className="flex text-red-700 gap-2 underline cursor-pointer">
                    <li>
                      <button
                        onClick={() => {
                          setSelectedAddress(address);
                          setShowEditForm(true);
                        }}
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => {
                          handleDelete(address._id);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
                {showEditForm && (
                  <EditAddressModal
                    setShowEditForm={setShowEditForm}
                    address={selectedAddress}
                    updateAddress={updateAddress}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {showForm && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="bg-white w-1/2 rounded-2xl p-4">
              <div className="flex justify-between">
                <h3 className="font-bold text-2xl text-left mb-4">
                  Create new address
                </h3>
                <button onClick={() => setShowForm(false)}>
                  <XMarkIcon className="w-6 h-6"></XMarkIcon>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="w-full">
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
                    onClick={handleSubmit}
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
