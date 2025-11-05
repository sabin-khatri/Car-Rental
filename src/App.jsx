/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Testimonial from "./components/Testimonial/Testimonial";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Booking from "./components/Booking/Booking";

const App = () => {
  // Dark Mode with localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const element = document.documentElement;

  // Apply theme on change
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Initialize AOS (once)
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []); // Empty dependency → runs only once

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* All sections with proper IDs for scroll */}
      <section id="hero"><Hero theme={theme} /></section>
      <section id="booking"><Booking /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="carlist"><CarList /></section>
      <Experience />
      <Testimonial />
      <AppStoreBanner />
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;