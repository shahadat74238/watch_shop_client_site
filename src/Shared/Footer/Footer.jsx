import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

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
        <footer className="footer footer-center p-10 text-white bg-[#0a0d1d] rounded">
      <div className="navbar-center">
        <ul className="flex md:flex-row flex-col px-1 md:gap-8 text-lg">{navLinks}</ul>
      </div>
      <nav>
        <div className="grid gap-4 grid-cols-4">
          <Link target={'_blank'} to="https://www.facebook.com/Shahadat.74238">
            <FaFacebookSquare className="text-secondary-color text-3xl" />
          </Link>
          <Link target={'_blank'} to="https://www.linkedin.com/in/md-shahadat-hosen-801164288/">
            <FaLinkedin className="text-secondary-color text-3xl" />
          </Link>
          <Link target={'_blank'} to="https://www.instagram.com/mdshahadathosen74238/">
            <FaInstagramSquare className="text-secondary-color text-3xl" />
          </Link>
          <Link target={'_blank'} to="https://github.com/shahadat74238">
            <FaGithubSquare className="text-secondary-color text-3xl" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by WATCHES.</p>
      </aside>
    </footer>
    );
};

export default Footer;