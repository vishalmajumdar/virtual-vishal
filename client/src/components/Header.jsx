import { useContext, useState } from "react";
import { AppContext } from "../App";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const link = location.pathname;
  const { theme, toggleTheme, isLoggedIn, setIsLoggedIn } =
    useContext(AppContext);

  // Sign out
  const handleSignOut = () => {
    setIsLoggedIn(false);

    // Redirect before clearing local storage
    navigate("/signin");

    // Clear local storage
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
  };
  return (
    <>
      {/* Drawer Starts */}
      <div className="drawer">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={() => setDrawerOpen(!drawerOpen)}
        />
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
                to={isLoggedIn ? "/dashboard" : "/"}
                className="btn btn-ghost normal-case text-xl font-serif"
              >
                Virtual Vishal
              </Link>
            </div>

            <div className="navbar-center flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1">
                {/* Navbar menu content here */}
                {isLoggedIn ? (
                  <>
                    <li className="mx-1">
                      <NavLink end to="/dashboard">
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="mx-1">
                      <NavLink to="/dashboard/summarize">
                        Article Summarizer
                      </NavLink>
                    </li>
                    <li className="mx-1">
                      <NavLink to="/dashboard/blog">Blog Writer </NavLink>
                    </li>
                    <li className="mx-1">
                      <NavLink to="/dashboard/image">Image Generator </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="mx-1">
                      <NavLink to="/">Home</NavLink>
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
                  </>
                )}
              </ul>
            </div>
            <div className="navbar-end">
              {isLoggedIn ? (
                <button className="btn" onClick={handleSignOut}>
                  Sign Out
                </button>
              ) : link !== "/signin" ? (
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
        {/* Mobile Drawer */}
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100">
            {/* Sidebar content start */}
            {isLoggedIn ? (
              <>
                <li className="mx-1" onClick={() => setDrawerOpen(false)}>
                  <NavLink end to="/dashboard">
                    Dashboard{" "}
                  </NavLink>
                </li>
                <li className="mx-1" onClick={() => setDrawerOpen(false)}>
                  <NavLink to="/dashboard/summarize">
                    Article Summarizer
                  </NavLink>
                </li>
                <li className="mx-1" onClick={() => setDrawerOpen(false)}>
                  <NavLink to="/dashboard/blog">Blog Writer </NavLink>
                </li>
                <li className="mx-1" onClick={() => setDrawerOpen(false)}>
                  <NavLink to="/dashboard/image">Image Generator </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="mx-1">
                  <NavLink to="/" onClick={() => setDrawerOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li className="mx-1">
                  <NavLink to={"/about"} onClick={() => setDrawerOpen(false)}>
                    About
                  </NavLink>
                </li>
                <li className="mx-1">
                  <NavLink to={"/pricing"} onClick={() => setDrawerOpen(false)}>
                    Pricing
                  </NavLink>
                </li>
                <li className="mx-1">
                  <NavLink to={"/contact"} onClick={() => setDrawerOpen(false)}>
                    Contact
                  </NavLink>
                </li>
                <li className="mx-1" onClick={() => setDrawerOpen(false)}>
                  {/* Theme Switcher Starts */}
                  <div onClick={toggleTheme}>
                    {theme === "luxury" ? "Light Mode" : "Dark Mode"}
                  </div>
                  {/* Theme Switcher Ends */}
                </li>
              </>
            )}
            {/* Sidebar content end */}
          </ul>
        </div>
      </div>
      {/* Drawer Ends */}
    </>
  );
};

export default Header;
