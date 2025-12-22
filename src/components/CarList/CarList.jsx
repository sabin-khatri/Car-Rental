// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";

const cars = [
  {
    id: 1,
    name: "Audi A4",
    price: 120,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",
    aosDelay: "0",
    modelYear: "2023",
  },
  {
    id: 2,
    name: "Honda CR-V",
    price: 110,
    image: "https://images.unsplash.com/photo-1621007503826-f3479af19c04?w=800&auto=format&fit=crop&q=80",
    aosDelay: "300",
    modelYear: "2024",
  },
  {
    id: 3,
    name: "Mercedes-Benz C-Class",
    price: 150,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=80",
    aosDelay: "600",
    modelYear: "2023",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    price: 135,
    image: "https://images.unsplash.com/photo-1555215695-300675f45f6d?w=800&auto=format&fit=crop&q=80",
    aosDelay: "900",
    modelYear: "2024",
  },
  {
    id: 5,
    name: "Tesla Model Y",
    price: 180,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=80",
    aosDelay: "1200",
    modelYear: "2025",
  },
  {
    id: 6,
    name: "Toyota Camry",
    price: 95,
    image: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=800&auto=format&fit=crop&q=80",
    aosDelay: "1500",
    modelYear: "2023",
  },
];

const CarList = () => {
  return (
    <section id="carlist" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-gray-800 dark:text-white mb-4">
            Explore Our Top-Rated Fleet
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from luxury sedans, family SUVs, and electric vehicles — all maintained to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={car.aosDelay}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x600/f3f4f6/1f2937?text=No+Image";
                  }}
                />
                <div className="absolute top-3 left-3 bg-white dark:bg-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow">
                  {car.modelYear}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary mb-2">{car.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">
                    ${car.price}
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/day</span>
                  </span>
                  <Link
                    to="booking"
                    smooth={true}
                    duration={500}
                    className="text-primary font-semibold hover:underline"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition"
          >
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarList;