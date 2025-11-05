/* eslint-disable no-unused-vars */
// src/components/Booking/Booking.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [selectedCar, setSelectedCar] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const car = searchParams.get("car");
    const price = searchParams.get("price");
    if (car) setSelectedCar(decodeURIComponent(car));
    if (price) setPrice(price);
  }, [searchParams]);

  return (
    <section id="booking" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Book Your Car</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Selected Car</label>
              <input
                type="text"
                value={selectedCar}
                readOnly
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800"
                placeholder="No car selected"
              />
              {price && (
                <p className="mt-2 text-lg font-semibold text-primary">
                  Price: ${price}/day
                </p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="px-4 py-3 border rounded-lg" required />
              <input type="email" placeholder="Email" className="px-4 py-3 border rounded-lg" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="date" className="px-4 py-3 border rounded-lg" required />
              <input type="date" className="px-4 py-3 border rounded-lg" required />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;