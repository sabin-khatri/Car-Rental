/* eslint-disable no-unused-vars */
// src/components/CarList/CarList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarDetailsModal from "./CarDetailsModal";

const cars = [
  {
    id: 1,
    name: "Audi A4",
    price: 120,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",
    year: "2023",
    specs: "2.0L Turbo, 252 HP, Automatic, 5 Seats",
  },
  {
    id: 2,
    name: "Honda CR-V",
    price: 110,
    image: "https://images.unsplash.com/photo-1621007503826-f3479af19c04?w=800&auto=format&fit=crop&q=80",
    year: "2024",
    specs: "1.5L Turbo, 190 HP, CVT, 5 Seats",
  },
  {
    id: 3,
    name: "Mercedes-Benz C-Class",
    price: 150,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=80",
    year: "2023",
    specs: "2.0L Turbo, 255 HP, Automatic, 5 Seats",
  },
];

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <section id="carlist" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-gray-800 dark:text-white mb-4">
            Explore Our Top-Rated Fleet
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Click any car to view details and book.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              onClick={() => setSelectedCar(car)}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white dark:bg-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow">
                  {car.year}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary mb-2">{car.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">
                    ${car.price}<span className="text-sm text-gray-500 dark:text-gray-400">/day</span>
                  </span>
                  <span className="text-primary font-semibold">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/cars"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition"
          >
            View All Cars
          </Link>
        </div>

        {/* Modal */}
        {selectedCar && (
          <CarDetailsModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </div>
    </section>
  );
};

export default CarList;