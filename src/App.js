import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.component";
import HomePage from "./pages/Home.pages";
import SignUp from "./pages/SignUp.pages";

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login"></Route>
      </Routes>
    </div>
  );
}
