import "./Header.css";
import logo from "./Logo.png"

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <img src={logo} alt="logo-photo" />
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li> 
            <li>
              <NavLink to="/destination">Destination</NavLink>
            </li>
            <li>
              <NavLink to="/tips">Tips</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
