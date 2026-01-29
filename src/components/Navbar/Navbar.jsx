/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
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

  // Handle scroll effect + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const scrollToSection = (sectionId) => {
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowMenu(false);
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      {/* ─── Main Navbar ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? "bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
              : "bg-white/95 backdrop-blur-xl shadow-xl shadow-gray-200/70"
            : isDark
            ? "bg-gray-900/80 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-2.5 md:gap-3 text-2xl md:text-3xl font-bold group"
            >
              <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-purple-600 to-blue-600 group-hover:shadow-purple-500/40"
                  : "bg-gradient-to-br from-blue-600 to-indigo-600 group-hover:shadow-blue-500/30"
              } group-hover:scale-105`}>
                <Car className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <span className={`bg-gradient-to-r ${
                isDark ? "from-purple-400 to-blue-400" : "from-blue-700 to-indigo-700"
              } bg-clip-text text-transparent font-extrabold tracking-tight group-hover:brightness-110 transition-all`}>
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
                    className="relative group px-4 py-2.5"
                  >
                    <span className={`text-base font-semibold transition-colors duration-300 ${
                      isActive
                        ? isDark
                          ? "text-purple-400"
                          : "text-blue-700 font-bold"
                        : isDark
                        ? "text-gray-200 hover:text-purple-300"
                        : "text-gray-800 hover:text-blue-700"
                    }`}>
                      {name}
                    </span>
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r transition-all duration-300 rounded-full ${
                      isDark
                        ? "from-purple-500 to-blue-500"
                        : "from-blue-600 to-indigo-600"
                    } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </button>
                );
              })}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`ml-5 p-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700 shadow-purple-500/20"
                    : "bg-gray-100 hover:bg-gray-200 shadow-gray-300/60"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-700" />
                )}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all hover:scale-105 ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-6 h-6 text-yellow-300" />
                ) : (
                  <Moon className="w-6 h-6 text-indigo-700" />
                )}
              </button>

              <button
                onClick={toggleMenu}
                className={`p-2.5 rounded-xl transition-all ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[320px] sm:w-[360px] overflow-hidden ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-white"
        } shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}>
            <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              Menu
            </h2>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full hover:bg-opacity-80 transition-all ${
                isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <X className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-900"}`} />
            </button>
          </div>

          {/* User Card */}
          <div className={`p-6 border-b ${
            isDark
              ? "bg-gradient-to-br from-purple-950/30 to-blue-950/20 border-gray-700"
              : "bg-gradient-to-br from-blue-50 to-indigo-50 border-gray-200"
          }`}>
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl shadow-lg ${
                isDark
                  ? "bg-gradient-to-br from-purple-600 to-blue-600"
                  : "bg-gradient-to-br from-blue-600 to-indigo-600"
              }`}>
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                  Hello User
                </h3>
                <p className={`text-sm font-medium ${isDark ? "text-purple-300" : "text-blue-700"}`}>
                  Premium Member
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="space-y-2">
              {Navlinks.map(({ id, name, link }, index) => {
                const isActive = activeSection === link.replace('#', '');
                return (
                  <li
                    key={id}
                    className="transition-all duration-300"
                    style={{
                      animation: showMenu
                        ? `slideIn 0.45s ease-out ${index * 0.08}s both`
                        : "none",
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(link)}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl font-medium text-lg transition-all ${
                        isActive
                          ? isDark
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-purple-600/30"
                            : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/30"
                          : isDark
                          ? "text-gray-200 hover:bg-gray-800/70 hover:text-purple-300"
                          : "text-gray-800 hover:bg-gray-100 hover:text-blue-700"
                      }`}
                    >
                      <span className={`w-1.5 h-8 rounded-full transition-all ${
                        isActive
                          ? "bg-white"
                          : isDark
                          ? "bg-purple-400 opacity-0 group-hover:opacity-100"
                          : "bg-blue-500 opacity-0 group-hover:opacity-100"
                      }`}></span>
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className={`p-6 border-t text-center text-sm ${
            isDark
              ? "border-gray-700 bg-gray-900/40 text-gray-400"
              : "border-gray-200 bg-gray-50 text-gray-600"
          }`}>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/SabinKhadgi"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline-offset-2 hover:underline ${
                isDark
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-blue-700 hover:text-blue-800"
              }`}
            >
              Sabin
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(35px);
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