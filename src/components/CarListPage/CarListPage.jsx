/* eslint-disable no-unused-vars */
// src/components/CarListPage/CarListPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Audi A4",
    price: 120,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",
    year: "2023",
  },
  {
    id: 2,
    name: "Honda CR-V",
    price: 110,
    image: "https://images.unsplash.com/photo-1621007503826-f3479af19c04?w=800&auto=format&fit=crop&q=80",
    year: "2024",
  },
  {
    id: 3,
    name: "Mercedes-Benz C-Class",
    price: 150,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=80",
    year: "2023",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    price: 135,
    image: "https://images.unsplash.com/photo-1555215695-300675f45f6d?w=800&auto=format&fit=crop&q=80",
    year: "2024",
  },
  {
    id: 5,
    name: "Tesla Model Y",
    price: 180,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=80",
    year: "2025",
  },
  {
    id: 6,
    name: "Toyota Camry",
    price: 95,
    image: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=800&auto=format&fit=crop&q=80",
    year: "2023",
  },
  {
    id: 7,
    name: "Ford Mustang",
    price: 160,
    image: "https://images.unsplash.com/photo-1606664515606-7a2c984d3cc1?w=800&auto=format&fit=crop&q=80",
    year: "2024",
  },
  {
    id: 8,
    name: "Volkswagen Golf",
    price: 85,
    image: "https://images.unsplash.com/photo-1606664515606-7a2c984d3cc1?w=800&auto=format&fit=crop&q=80",
    year: "2024",
  },
  {
    id: 9,
    name: "Porsche 911",
    price: 250,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
    year: "2025",
  },
  {
    id: 10,
    name: "Chevrolet Camaro",
    price: 140,
    image: "https://images.unsplash.com/photo-1606664515606-7a2c984d3cc1?w=800&auto=format&fit=crop&q=80",
    year: "2024",
  },
];

const CarListPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-lg"
        >
          <ArrowLeft size={24} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          All Available Cars (10 Models)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{car.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Model Year: <span className="font-semibold">{car.year}</span>
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">
                    ${car.price}
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/day</span>
                  </span>
                  <Link
                    to="/#booking"
                    className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListPage;