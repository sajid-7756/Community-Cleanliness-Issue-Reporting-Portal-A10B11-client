import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser, signOutFunc } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Sign Out Success");
        setUser(null);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/issues"}>All Issues</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100/80 sticky top-0 z-50 backdrop-blur-md border-b border-base-200 px-4 py-2">
      <Container className="flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-200"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="bg-primary text-primary-content px-2 py-1 rounded-lg">Clean</span>
            <span className="text-secondary">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              checked={theme === "dark"}
            />
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z" />
            </svg>
          </label>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-primary ring-2 ring-primary ring-offset-2">
                <div className="w-10 rounded-full">
                  <img
                    alt={user.displayName}
                    src={
                      user?.photoURL?.startsWith("http")
                        ? user?.photoURL
                        : "https://i.ibb.co/CpHdF8h2/icons8-user.gif"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200"
              >
                <li className="menu-title px-4 py-2 border-b border-base-200 mb-2">
                  <p className="font-bold text-base-content">{user?.displayName}</p>
                  <p className="text-xs text-base-content/60 truncate">{user?.email}</p>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button
                    className="text-error hover:bg-error hover:text-error-content transition-colors mt-2"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="btn btn-ghost btn-sm sm:btn-md font-bold"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-sm sm:btn-md px-6 shadow-lg shadow-primary/20"
              >
                Join Now
              </Link>
            </div>
          )}
        </div>

      </Container>
    </div>
  );
};

export default Navbar;
