import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(() => {
      console.log("Signing out successfully!");
      alert("Signing out successfully!");
    })
    .catch(err => {
      console.log(err.message);
    })
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
          to="/signUp"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-secondary-color text-secondary-color"
              : " duration-200 hover:text-secondary-color hover:border-b-2 hover:border-secondary-color"
          }
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-primary-color text-white">
      <div className="navbar container mx-auto">
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
              className="menu-sm   dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="">
                <div className="avatar online cursor-pointer">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL? user.photoURL : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"} />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] mt-3  p-3 shadow  rounded-box bg-[#0a0d1d] w-36 md:w-52"
              >
                <p className="text-sm text-center md:text-lg md:font-semibold">{user.displayName ? user.displayName : "Username"}</p>
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
              <button className="h-11 w-24 py-1 px-3 rounded-lg bg-secondary-color font-semibold text-lg duration-500 hover:bg-primary-color hover:text-secondary-color hover:border-2 hover:border-secondary-color">
              Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
