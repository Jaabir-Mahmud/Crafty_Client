import { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext || {};
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(() => {
    switchTheme();
  }, [isDarkMode]);

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const switchTheme = () => {
    const switchToggle = document.querySelector("#switch-toggle");
    const body = document.querySelector("body");

    if (isDarkMode) {
      // Apply dark mode styles
      switchToggle.classList.remove("bg-yellow-500", "-translate-x-2");
      switchToggle.classList.add("bg-gray-700", "translate-x-full");
      body.classList.add("dark");
    } else {
      // Apply light mode styles
      switchToggle.classList.remove("bg-gray-700", "translate-x-full");
      switchToggle.classList.add("bg-yellow-500", "-translate-x-2");
      body.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  return (
    <div className="navbar bg-blue-400 lg:px-24 md:px-16 sm:px-8 px-4">
      <div className="navbar-start">
        {/* Dropdown Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {/*  dropdown menu items */}
          </ul>
        </div>
        {/* Link to Home */}
        <NavLink
          to="/"
          className="btn btn-ghost text-xl"
          activeClassName="font-bold"
          exact
        >
          Crafty
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              exact
              to="/"
              className="text-white hover:text-blue-200"
              activeClassName="font-bold"
            >
              Home
            </NavLink>
          </li>
          <li className="active">
            <NavLink
              to="/allArt"
              className="text-white hover:text-blue-200"
              activeClassName="font-bold"
            >
              All Art &craft Items
            </NavLink>
          </li>
          {/* Add Craft Items */}
          <li className="active">
            <NavLink
              to="/addCraftItem"
              className="text-white hover:text-blue-200"
              activeClassName="font-bold"
            >
              Add Craft Items
            </NavLink>
          </li>
          {/* My Art & Craft List */}
          <li className="active">
            <NavLink
              to="/myArtCraftList"
              className="text-white hover:text-blue-200"
              activeClassName="font-bold"
            >
              My Art & Craft List
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button
          className="w-16 h-8 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
          onClick={toggleTheme}
        >
          <div
            id="switch-toggle"
            className={`w-8 h-8 relative rounded-full transition duration-500 transform ${
              isDarkMode
                ? "bg-gray-700 translate-x-full"
                : "bg-yellow-500 -translate-x-2"
            } p-1 text-white`}
          >
            {isDarkMode ? darkIcon : lightIcon}
          </div>
        </button>

        {/* Conditional rendering based on user authentication status */}
        {user ? (
          <>
            {/* Avatar */}
            <div className="avatar mr-2">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://i.ibb.co/QnGz7Yz/5.jpg"}
                  title={user.displayName || "User"}
                  alt="User Avatar"
                />
              </div>
            </div>
            {/* Logout Button */}
            <button onClick={logout} className="btn btn-sm btn-ghost">
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Register Button */}
            <Link to="/register">
              <button className="btn btn-sm btn-ghost">Register</button>
            </Link>
            {/* Login Button */}
            <Link to="/login">
              <button className="btn btn-sm btn-ghost">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;