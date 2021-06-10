import React from "react";
import { Link } from "react-router-dom";
// import AuthenticationButton from "../components/authzero/AuthenticationButton";
// import Login from "./authzero/Login";
// import LogoutButton from "./authzero/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import cocktails_logo from "../logo/cocktails_logo.png";
import Login from "./authzero/Login";
import LogoutButton from "./authzero/LogoutButton";
/*src={logo of the project} */
export default function Navbar() {
  const { user, isLoading } = useAuth0();
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/">
          <img src={cocktails_logo} alt="logo" className="logo" />
        </Link>
        {!isLoading && !user && <Login />}
        {!isLoading && user && (
          <React.Fragment>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/newCocktail">new cocktail</Link>
              </li>

              <li>
                <Link to="/about">spirit/wine</Link>
              </li>
              <li>
                <Link to="/about">News</Link>
              </li>
              <LogoutButton />
            </ul>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}
