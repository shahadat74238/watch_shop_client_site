import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);

  const handleChange = () => {
    if (theme === true) {
      const htmlElement = document.querySelector("html");
      htmlElement.setAttribute("class", "light");
    } else {
      const htmlElement = document.querySelector("html");
      htmlElement.setAttribute("class", "dark");
    }
  };


  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Signing out successfully!");
        toast.success('Successfully Sign In!')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-secondary-color text-secondary-color"
              : " duration-200 hover:text-secondary-color hover:border-b-2 hover:border-secondary-color"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allWatches"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-secondary-color text-secondary-color"
              : " duration-200 hover:text-secondary-color hover:border-b-2 hover:border-secondary-color"
          }
        >
          All Watches
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-secondary-color text-secondary-color"
              : " duration-200 hover:text-secondary-color hover:border-b-2 hover:border-secondary-color"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCard"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-secondary-color text-secondary-color"
              : " duration-200 hover:text-secondary-color hover:border-b-2 hover:border-secondary-color"
          }
        >
          My Card
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-primary-color text-white">
      <div className="navbar container mx-auto px-5 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1] py-3 px-4 shadow text-secondary-color bg-primary-color w-32"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" uppercase font-bold text-3xl">
            <span className="text-secondary-color">Wat</span>ches
          </a>
        </div>
        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal text-lg font-semibold gap-5 px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="mr-5">
        <button
          onClick={() => handleChange(setTheme(!theme))}
          className=" h-8  w-8 p-1 rounded-full bg-white dark:bg-gray-900 dark:text-white text-black "
        >
          {
            theme?  <CiLight className="text-2xl text-center" />:<MdDarkMode className="text-2xl text-center" /> 
          }
        </button>
      </div>
          <div>
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="">
                <div className="avatar online cursor-pointer">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      }
                    />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] mt-3  p-3 shadow  rounded-box bg-[#0a0d1d] w-36 md:w-52"
              >
                <p className="text-sm text-center md:text-lg md:font-semibold">
                  {user.displayName ? user.displayName : "Username"}
                </p>
                <li>
                  <button
                    onClick={handleSignOut}
                    className=" w-full hover:text-secondary-color lg:text-lg lg:font-semibold "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signIn">
              <button className="primary-btn w-24">
                Sign in
              </button>
            </Link>
          )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Navbar;
