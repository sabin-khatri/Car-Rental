/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const ResponsiveMenu = ({ showMenu, setShowMenu, Navlinks, theme, setTheme }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-40 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* User Info */}
        <div className="flex items-center justify-start gap-3 mb-8">
          <FaUserCircle size={50} />
          <div>
            <h1 className="text-lg font-medium">Hello User</h1>
            <h2 className="text-sm text-slate-500">Premium Member</h2>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="space-y-6 text-xl">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                {name === "CarList" ? (
                  <RouterLink
                    to="/cars"
                    onClick={() => setShowMenu(false)}
                    className="mb-5 inline-block capitalize hover:text-primary transition-colors duration-200"
                  >
                    {name}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                    className="mb-5 inline-block capitalize hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Switcher in Mobile Menu */}
        <div className="mt-8 flex justify-center">
          {theme === "dark" ? (
            <BiSolidSun
              onClick={() => setTheme("light")}
              className="text-3xl cursor-pointer hover:text-primary"
            />
          ) : (
            <BiSolidMoon
              onClick={() => setTheme("dark")}
              className="text-3xl cursor-pointer hover:text-primary"
            />
          )}
        </div>
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