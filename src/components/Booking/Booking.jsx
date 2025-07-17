// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Booking = () => {
  // State for each form input
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Handle form submission
  const handleBooking = (event) => {
    event.preventDefault(); // Prevent page reload
    if (!location || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }
    // You can replace this with an API call in a real application
    alert(`Booking Details:
      Location: ${location}
      Start Date: ${startDate}
      End Date: ${endDate}`);
  };

  return (
    // The id="booking" is important for the Navbar link to work
    <section id="booking" className="py-14" data-aos="fade-up">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-6 text-center">
          Book a Car Now
        </h1>
        <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg">
          <form onSubmit={handleBooking} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Location Input */}
            <div className="flex flex-col">
              <label htmlFor="location" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter a city or airport"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Start Date Input */}
            <div className="flex flex-col">
              <label htmlFor="startDate" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* End Date Input */}
            <div className="flex flex-col">
              <label htmlFor="endDate" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full bg-primary text-black font-bold py-3 px-6 rounded-md hover:bg-primary/80 transition duration-300"
              >
                Search Cars
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;