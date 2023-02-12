import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.component";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes path="/">
        <Route></Route>
      </Routes>
    </div>
  );
}
