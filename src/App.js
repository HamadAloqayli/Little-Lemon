import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Menu from "./screens/Menu";
import Reservations from "./screens/Reservations";
import Order from "./screens/Order";
import Login from "./screens/Login";

import "./assets/styles/style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./screens/Success";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
