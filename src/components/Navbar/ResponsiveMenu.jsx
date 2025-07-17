/* eslint-disable react/prop-types */
// import React from "react";
import { FaUserCircle } from "react-icons/fa";

// The component now accepts `showMenu` and `Navlinks` as props
const ResponsiveMenu = ({ showMenu, Navlinks }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* User Info Section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h2 className="text-sm text-slate-500">Premium user</h2>
          </div>
        </div>

        {/* Navigation Links Section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {/* It now maps over the Navlinks prop passed from Navbar */}
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="mb-5 inline-block capitalize">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <h1>
          Made with ❤ by <a href="https://github.com/SabinKhadgi">Sabin</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;