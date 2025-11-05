

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";

const cars = [
  {
    id: 1,
    name: "Audi A4",
    price: 120,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop",
    aosDelay: "0",
    modelYear: "2023",
  },
  {
    id: 2,
    name: "Honda CR-V",
    price: 110,
    image: "https://images.unsplash.com/photo-1621007503826-f3479af19c04?w=800&auto=format&fit=crop&q=80", // Honda CR-V (real image)
    aosDelay: "300",
    modelYear: "2024",
  },
  {
    id: 3,
    name: "Mercedes-Benz C-Class",
    price: 150,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop",
    aosDelay: "600",
    modelYear: "2023",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    price: 135,
    image: "https://images.unsplash.com/photo-1555215695-300675f45f6d?w=800&auto=format&fit=crop&q=80", // BMW 3 Series (real image)
    aosDelay: "900",
    modelYear: "2024",
  },
  {
    id: 5,
    name: "Tesla Model Y",
    price: 180,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop",
    aosDelay: "1200",
    modelYear: "2025",
  },
  {
    id: 6,
    name: "Toyota Camry",
    price: 95,
    image: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=800&auto=format&fit=crop&q=80", // Toyota Camry (real image)
    aosDelay: "1500",
    modelYear: "2023",
  },
];

const CarList = () => {
  return (
    <section id="carlist" className="pb-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div data-aos="fade-up" className="mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-gray-800 dark:text-white">
            Explore Our Top-Rated Fleet
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-sm pb-10 text-gray-600 dark:text-gray-300"
          >
            Discover a wide range of vehicles to suit your needs. From sleek sedans to spacious SUVs.
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cars.map((car) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={car.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-4 rounded-xl relative group transition duration-300 bg-white dark:bg-gray-800 shadow-md"
            >
              <div className="w-full h-[120px] md:h-[180px] overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-t-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover sm:translate-x-8 group-hover:sm:translate-x-16 duration-700 transition-transform"
                  loading="lazy" // फास्ट लोडिंगको लागि
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800?text=Image+Not+Found"; // यदि image load नभए fallback
                  }}
                />
              </div>

              <div className="space-y-1 px-2">
                <h2 className="text-primary font-semibold">{car.name}</h2>
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>${car.price}/Day</span>
                  <Link
                    to="booking"
                    smooth={true}
                    duration={500}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Details
                  </Link>
                </div>
              </div>

              <span className="text-sm font-semibold absolute top-2 left-3 bg-white dark:bg-gray-700 px-2 py-1 rounded shadow">
                {car.modelYear}
              </span>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="grid place-items-center mt-12">
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            Browse All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarList;