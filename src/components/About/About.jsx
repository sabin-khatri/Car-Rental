// import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="Red premium car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                At our core, we believe that renting a car should be a simple and seamless experience. We are dedicated to providing exceptional service and reliable vehicles to make your journey as smooth as possible.
              </p>
              <p data-aos="fade-up">
                Our fleet is carefully selected to meet a variety of needs, ensuring safety, comfort, and style. We stand for transparency and customer satisfaction, which means no hidden fees and a dedicated support team ready to assist you.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Explore Our Fleet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;