/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-scroll";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, Navlinks, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* User Info */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1 className="text-lg font-medium">Hello User</h1>
            <h2 className="text-sm text-slate-500">Premium Member</h2>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block capitalize hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="footer text-sm text-center">
        <h1>
          Made with Love by{" "}
          <a href="https://github.com/SabinKhadgi" className="underline text-primary">
            Sabin
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;