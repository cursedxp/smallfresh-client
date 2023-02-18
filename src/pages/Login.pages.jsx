import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/shop.context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(ShopContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="wrapper mx-auto max-w-screen-2xl">
      <div
        className="container m-4 rounded-3xl  items-center flex flex-col p-8 pt-12 "
        style={{
          height: 200,
          backgroundImage: `url("https://images.unsplash.com/photo-1609196141706-91f4f03e1543")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex justify-center ">
        <div
          className="flex flex-col bg-white p-8 rounded-3xl shadow-lg"
          style={{ width: "600px" }}
        >
          <form className="" onSubmit={handleLoginSubmit}>
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
            <div className="flex justify-between items-center">
              <div className="flex justify-center">
                <p>Dont you have an account? </p>
                <Link to={"/register"} className="text-red-700 font-bold">
                  &nbsp; Register
                </Link>
              </div>
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl h-12 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          {errorMessage && (
            <div className=" text-center text-red-700 p-4 mt-6 bg-red-200 rounded-xl">
              <p className="error-message">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
