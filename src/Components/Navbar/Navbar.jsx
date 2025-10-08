import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="navbar w-full max-w-screen-3xl bg-base-100 shadow-sm mx-auto px-5 md:px-8 lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn mx-1 px-0 btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content space-y-4 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="rounded-0">
              <NavLink className="rounded-none"   to='/'><i class="fa-solid fa-house-user"></i> Home</NavLink>
            </li>
            <li className="rounded-0">
              <NavLink className="rounded-none" to='/apps'><i class="fa-brands fa-app-store"></i>Apps</NavLink>
            </li>
            <li className="rounded-0">
              <NavLink className="rounded-none"  to='/installation'><i class="fa-solid fa-download"></i>Installation</NavLink>
            </li>


            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]" src={Logo} alt="" /> HERO.IO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10">
            <li className="rounded-0">
              <NavLink className="rounded-none"   to='/'><i class="fa-solid fa-house-user"></i>Home</NavLink>
            </li>
            <li className="rounded-0">
              <NavLink className="rounded-none" to='/apps'><i class="fa-brands fa-app-store"></i>Apps</NavLink>
            </li>
            <li className="rounded-0">
              <NavLink className="rounded-none"  to='/installation'><i class="fa-solid fa-download"></i>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/ffrahat"
            target="_blank"
            className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white"
          >
            {" "}
            <i class="fa-brands fa-github"></i> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
