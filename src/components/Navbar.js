import logo from "../assets/images/Logo.svg";
import menu from "../assets/icons/menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img alt="logo" src={logo} />

      <img
        className="menuIcon"
        alt="menu"
        src={menu}
        onClick={() => setShowMenu(true)}
      />

      {showMenu && (
        <div className="menuScreen">
          <p className="closeIcon" onClick={() => setShowMenu(false)}>
            X
          </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}

      <ul className="horMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
