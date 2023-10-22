import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../App";

const Header = () => {
  const location = useLocation();
  const link = location.pathname;
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <>
      {/* Drawer Starts */}
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-100 shadow">
            <div className="navbar-start">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
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
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>

              <Link
                to={"/"}
                className="btn btn-ghost normal-case text-xl font-serif"
              >
                Virtual Vishal
              </Link>
            </div>

            <div className="navbar-center flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1">
                {/* Navbar menu content here */}
                <li className="mx-1">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li className="mx-1">
                  <NavLink to={"/about"}>About </NavLink>
                </li>
                <li className="mx-1">
                  <NavLink to={"/pricing"}>Pricing </NavLink>
                </li>
                <li className="mx-1">
                  <NavLink to={"/contact"}>Contact </NavLink>
                </li>
                <li className="mx-1">
                  {/* Theme Switcher Starts */}
                  <div onClick={toggleTheme}>
                    {theme === "luxury" ? "Light Mode" : "Dark Mode"}
                  </div>
                  {/* Theme Switcher Ends */}
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {link !== "/signin" ? (
                <Link to={"/signin"} className="btn">
                  Sign In
                </Link>
              ) : (
                <Link to={"/signup"} className="btn">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About </NavLink>
            </li>
            <li>
              <NavLink to={"/pricing"}>Pricing </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact </NavLink>
            </li>
            <li>
              {/* Theme Switcher Starts */}
              <div onClick={toggleTheme}>
                {theme === "luxury" ? "Light Mode" : "Dark Mode"}
              </div>
              {/* Theme Switcher Ends */}
            </li>
          </ul>
        </div>
      </div>
      {/* Drawer Ends */}
    </>
  );
};

export default Header;
