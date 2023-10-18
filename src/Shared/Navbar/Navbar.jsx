import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "border-b-2 border-secondary-color text-secondary-color" : " duration-200 hover:text-secondary-color hover:border-b-2 hover:border-secondary-color")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signUp"
          className={({ isActive }) => (isActive ? "border-b-2 border-secondary-color text-secondary-color" : " duration-200 hover:text-secondary-color hover:border-b-2 hover:border-secondary-color")}
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
          <a className=" uppercase font-bold text-3xl"><span className="text-secondary-color">Wat</span>ches</a>
        </div>
        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal text-lg font-semibold gap-5 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/signIn">
          <button className="bg-secondary-color text-white h-10 w-24 text-lg font-semibold rounded">Sign in</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
