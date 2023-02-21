import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.component";
import HomePage from "./pages/Home.pages";
import SignUp from "./pages/SignUp.pages";
import Login from "./pages/Login.pages";
import ProductDetails from "./pages/ProductDetails.pages";
import SideMenu from "./components/SideMenu.component";
import SettingsLayout from "./components/SettingsLayout.component";

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
          path="/settings"
          element={
            <SettingsLayout>
              <SideMenu />
            </SettingsLayout>
          }
        />
      </Routes>
    </div>
  );
}
