/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Camera, Sun, Moon, Menu, X, User, Car } from "lucide-react";

// Navigation Links
const Navlinks = [
  { id: 1, name: "Home", link: "#hero" },
  { id: 2, name: "CarList", link: "#carlist" },
  { id: 3, name: "About", link: "#about" },
  { id: 4, name: "Services", link: "#services" },
  { id: 5, name: "Book", link: "#booking" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = Navlinks.map(link => link.link.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowMenu(false);
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? "bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
              : "bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
            : isDark
            ? "bg-gray-900 shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo with Icon */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-2 md:gap-3 text-xl md:text-3xl font-bold group"
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? "bg-gradient-to-br from-purple-600 to-blue-600 group-hover:shadow-lg group-hover:shadow-purple-500/50" 
                  : "bg-gradient-to-br from-blue-600 to-purple-600 group-hover:shadow-lg group-hover:shadow-blue-500/50"
              } group-hover:scale-110`}>
                <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className={`bg-gradient-to-r ${
                isDark 
                  ? "from-purple-400 to-blue-400" 
                  : "from-blue-600 to-purple-600"
              } bg-clip-text text-transparent font-extrabold tracking-tight group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300`}>
                GoDrive
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {Navlinks.map(({ id, name, link }) => {
                const isActive = activeSection === link.replace('#', '');
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(link)}
                    className="relative group px-4 py-2"
                  >
                    <span className={`text-sm lg:text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? "text-purple-400"
                          : "text-blue-600"
                        : isDark
                        ? "text-gray-300 hover:text-purple-400"
                        : "text-gray-700 hover:text-blue-600"
                    }`}>
                      {name}
                    </span>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r transition-all duration-300 ${
                      isDark
                        ? "from-purple-500 to-blue-500"
                        : "from-blue-600 to-purple-600"
                    } ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </button>
                );
              })}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`ml-4 p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700 shadow-lg shadow-purple-500/20"
                    : "bg-gray-100 hover:bg-gray-200 shadow-lg shadow-blue-500/20"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "hover:bg-gray-800"
                    : "hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                {showMenu ? (
                  <X className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-900"}`} />
                ) : (
                  <Menu className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-900"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[320px] sm:w-[360px] ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-white via-gray-50 to-white"
        } shadow-2xl transform transition-all duration-500 ease-out md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className={`flex items-center justify-between p-6 border-b ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}>
            <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              Menu
            </h2>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
            >
              <X className={`w-6 h-6 ${isDark ? "text-white" : "text-gray-900"}`} />
            </button>
          </div>

          {/* User Info Card */}
          <div className={`p-6 ${
            isDark
              ? "bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-b border-gray-700"
              : "bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200"
          }`}>
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gradient-to-br from-purple-600 to-blue-600"
                  : "bg-gradient-to-br from-blue-600 to-purple-600"
              }`}>
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Hello User
                </h3>
                <p className={`text-sm ${isDark ? "text-purple-300" : "text-blue-600"} font-medium`}>
                  Premium Member
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {Navlinks.map(({ id, name, link }, index) => {
                const isActive = activeSection === link.replace('#', '');
                return (
                  <li
                    key={id}
                    className="transform transition-all duration-300"
                    style={{
                      animation: showMenu
                        ? `slideIn 0.4s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(link)}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl font-semibold transition-all duration-300 group ${
                        isActive
                          ? isDark
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30"
                            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                          : isDark
                          ? "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                    >
                      <span className={`w-1.5 h-8 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-white"
                          : isDark
                          ? "bg-purple-500 opacity-0 group-hover:opacity-100"
                          : "bg-blue-600 opacity-0 group-hover:opacity-100"
                      }`}></span>
                      <span className="text-lg">{name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className={`p-6 border-t ${
            isDark
              ? "border-gray-700 bg-gray-800/50"
              : "border-gray-200 bg-gray-50"
          }`}>
            <p className={`text-center text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Made with ❤️ by{" "}
              <a
                href="https://github.com/SabinKhadgi"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold ${
                  isDark
                    ? "text-purple-400 hover:text-purple-300"
                    : "text-blue-600 hover:text-blue-700"
                } hover:underline transition-colors duration-200`}
              >
                Sabin
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;