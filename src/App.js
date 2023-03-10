import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.component";
import HomePage from "./pages/Home.pages";
import SignUp from "./pages/SignUp.pages";
import Login from "./pages/Login.pages";
import ProductDetails from "./pages/ProductDetails.pages";
import SideMenu from "./components/SideMenu.component";
import SettingsLayout from "./components/SettingsLayout.component";
import Addresses from "./pages/Addresses.pages";
import Settings from "./pages/Settings.pages";
import MyProducts from "./pages/MyProducts.pages";
import Admin from "./pages/Admin.pages";

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/addresses"
          element={
            <SettingsLayout>
              <SideMenu />
              <Addresses />
            </SettingsLayout>
          }
        />
        <Route
          path="/user/settings"
          element={
            <SettingsLayout>
              <SideMenu />
              <Settings />
            </SettingsLayout>
          }
        />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
