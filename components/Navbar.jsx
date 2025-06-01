"use client";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle.jsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const route = usePathname();

  return (
    <div className="navbar backdrop-blur-md shadow-sm fixed z-1 top-0">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn capitalize btn-ghost text-xl rounded-lg font-bold"
        >
          <FaCode className="text-2xl" />
          hirmaan rashidi
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/projects"
              className={
                route === "/projects"
                  ? "rounded-lg font-medium mx-1 bg-accent text-base-300"
                  : "rounded-lg font-medium mx-1"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/dev"
              className={
                route === "/dev"
                  ? "rounded-lg font-medium mx-1 bg-accent text-base-300"
                  : "rounded-lg font-medium mx-1"
              }
            >
              Dev
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
        <div className="dropdown dropdown-end rounded-lg ring ring-primary lg:hidden py-1">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xs sm:btn-sm rounded-lg lg:hidden bg-base-100 border-none"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-lg bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/projects"
                className={
                  route === "/projects"
                    ? "rounded-lg font-medium bg-accent text-base-300"
                    : "rounded-lg font-medium"
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/dev"
                className={
                  route === "/dev"
                    ? "rounded-lg font-medium bg-accent text-base-300"
                    : "rounded-lg font-medium"
                }
              >
                dev
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
