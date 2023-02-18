import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  return (
    <div className="wrapper mx-auto max-w-screen-2xl">
      <div
        className="container m-4 rounded-3xl  items-center flex flex-col p-8 pt-12 "
        style={{
          height: 200,
          backgroundImage: `url("https://images.unsplash.com/photo-1610348725531-843dff563e2c")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex justify-center ">
        <div
          className="flex flex-col bg-white p-8 rounded-3xl shadow-lg"
          style={{ width: "600px" }}
        >
          <form className="" onSubmit={""}>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="first-name">
                First Name
              </label>
              <input
                className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="last-name">
                Last Name
              </label>
              <input
                className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none border rounded-xl h-12 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
          </form>
          <div className="flex justify-center p-4">
            <p>Already have account? </p>
            <Link to={"/login"} className="text-red-700 font-bold">
              &nbsp; Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
