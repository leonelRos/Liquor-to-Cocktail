import React from "react";
import { Link } from "react-router-dom";
import cocktails_logo from "../logo/cocktails_logo.png";
/*src={logo of the project} */
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/">
          <img src={cocktails_logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
