import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shop.context";

export default function Settings() {
  const { isLoggedIn, user, logOutUser } = useContext(ShopContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getUserDetails = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${user._id}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
      .catch((error) => {
        setErrorMessage("Error retrieving user details");
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/users`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
        {
          params: {
            userId: user?._id,
          },
        }
      )
      .then((response) => {
        setErrorMessage("");
        console.log("User details updated successfully");
      })
      .catch((error) => {
        setErrorMessage("Error updating user details");
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      getUserDetails();
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between border-b border-gray-300">
        <h3 className="font-bold text-2xl text-left mt-4 mb-4 ">
          User Settings
        </h3>
      </div>
      <div className=" p-4 my-4">
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="text-red-600 mb-4">{errorMessage}</div>
          )}
          <div className="flex gap-4 w-1/2">
            <label className=" font-bold flex flex-col w-full mb-4">
              First Name:
              <input
                className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </label>
            <label className=" font-bold flex flex-col w-full mb-4">
              Last Name:
              <input
                className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="flex gap-4 w-1/2">
            <label className=" font-bold flex flex-col w-full mb-4">
              Email:
              <input
                className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="flex justify-end w-1/2">
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
