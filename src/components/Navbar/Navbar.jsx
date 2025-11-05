/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";

// Navigation Links
export const Navlinks = [
  { id: 1, name: "Home", link: "hero" },
  { id: 2, name: "CarList", link: "carlist" },
  { id: 3, name: "About", link: "about" },
  { id: 4, name: "Services", link: "services" },
  { id: 5, name: "Book", link: "booking" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md w-full bg-white dark:bg-black dark:text-white duration-300">
        <div className="container mx-auto px-4 py-3 md:py-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="text-3xl font-bold font-serif cursor-pointer hover:text-primary transition"
            >
              GoDrive
            </ScrollLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id} className="py-4">
                    {name === "CarList" ? (
                      // Special case: CarList → /cars page
                      <RouterLink
                        to="/cars"
                        className="text-lg font-medium capitalize hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-300"
                      >
                        {name}
                      </RouterLink>
                    ) : (
                      <ScrollLink
                        to={link}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="text-lg font-medium capitalize hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-300 cursor-pointer"
                      >
                        {name}
                      </ScrollLink>
                    )}
                  </li>
                ))}

                {/* Theme Switcher */}
                <li>
                  {theme === "dark" ? (
                    <BiSolidSun
                      onClick={() => setTheme("light")}
                      className="text-2xl cursor-pointer hover:text-primary transition"
                    />
                  ) : (
                    <BiSolidMoon
                      onClick={() => setTheme("dark")}
                      className="text-2xl cursor-pointer hover:text-primary transition"
                    />
                  )}
                </li>
              </ul>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Theme Switcher (Mobile) */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}

              {/* Menu Toggle */}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        Navlinks={Navlinks}
        theme={theme}
        setTheme={setTheme}
      />
    </>
  );
};

export default Navbar;