// import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

// Updated car data with more realistic details
const cars = [
  {
    id: 1,
    name: "Audi A4",
    price: 120,
    image: whiteCar,
    aosDelay: "0",
    modelYear: "2023",
  },
  {
    id: 2,
    name: "Honda CR-V",
    price: 110,
    image: car2,
    aosDelay: "500",
    modelYear: "2024",
  },
  {
    id: 3,
    name: "Mercedes-Benz C-Class",
    price: 150,
    image: car3,
    aosDelay: "1000",
    modelYear: "2023",
  },
];

const CarList = () => {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        {/* Heading and introductory paragraph */}
        <div data-aos="fade-up" className="mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
            Explore Our Top-Rated Fleet
          </h1>
          <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
            Discover a wide range of vehicles to suit your needs. From sleek sedans for city driving to spacious SUVs for family adventures, we have the perfect car for your next journey.
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cars.map((car) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={car.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-4 rounded-xl relative group transition duration-300"
            >
              <div className="w-full h-[120px] overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.name}`}
                  className="w-full h-full object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700 ease-in-out"
                />
              </div>

              <div className="space-y-1">
                <h2 className="text-primary font-semibold">{car.name}</h2>
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>${car.price}/Day</span>
                  <a href="#" className="text-primary hover:underline">Details</a>
                </div>
              </div>

              {/* Model year badge */}
              <span className="text-sm font-semibold absolute top-2 left-3 bg-white px-2 py-1 rounded shadow">
                {car.modelYear}
              </span>
            </div>
          ))}
        </div>

        {/* "Browse All" Button */}
        <div className="grid place-items-center mt-10">
          <button data-aos="fade-up" className="button-outline">
            Browse All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarList;