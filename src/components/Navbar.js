import React from "react";
import { Link } from "react-router-dom";
/*src={logo of the project} */
export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src="" alt="cocktail" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
