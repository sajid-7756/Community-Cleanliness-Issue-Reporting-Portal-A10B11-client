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
      {user && (
        <>
          <li>
            <NavLink to={"/add-issues"}>Add Issues</NavLink>
          </li>
          <li>
            <NavLink to={"/my-issues"}>My Issues</NavLink>
          </li>
          <li>
            <NavLink to={"/my-contribution"}>My Contribution</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-white/50 dark:bg-base-100/50 shadow-sm sticky top-0 z-50 backdrop-blur-md p-4">
      <Container className="flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content dark:bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow bg-white"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn shadow-none bg-transparent border-none outline-none text-2xl font-bold"
          >
            Clean <span className="text-accent">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <label className="toggle text-base-content sm:hidden">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              checked={theme === "dark"}
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>

          <label className="hidden sm:flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              checked={theme === "dark"}
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <div className="dropdown dropdown-end avatar indicator relative">
              <span className="indicator-item badge badge-primary absolute top-1 right-0 animate-pulse hidden sm:block opacity-50">
                {user?.displayName}
              </span>
              <label tabIndex={0} className="cursor-pointer">
                <img
                  title={user.displayName}
                  className="w-10 h-10 rounded-full ring-3 ring-primary"
                  src={
                    user?.photoURL.startsWith("http")
                      ? user?.photoURL
                      : "https://i.ibb.co.com/CpHdF8h2/icons8-user.gif"
                  }
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow dark:bg-base-100 rounded-box w-30 bg-white absolute top-14 "
              >
                <li>
                  <button className="btn btn-outline" onClick={handleSignOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn btn-outline hover:btn-primary transition-all duration-300"
              >
                Sign In
              </Link>
              <Link to={"/register"} className=" hidden sm:block">
                <button className="btn btn-outline hover:btn-primary transition-all duration-300">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
