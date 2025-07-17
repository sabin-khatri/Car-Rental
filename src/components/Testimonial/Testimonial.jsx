// import React from "react";

// Updated testimonial data with realistic content
const testimonialData = [
  {
    name: "Alex M.",
    image: "", // Placeholder, will be replaced by the picsum URL below
    description: "The entire process was incredibly smooth, from booking online to picking up the car. The vehicle was clean, modern, and a joy to drive. Highly recommended!",
    aosDelay: "0",
  },
  {
    name: "Sarah L.",
    image: "",
    description: "Fantastic customer service! The team was so helpful and accommodating when I needed to extend my rental period. They made everything easy and stress-free.",
    aosDelay: "300",
  },
  {
    name: "David R.",
    image: "",
    description: "We rented an SUV for a family road trip, and it was perfect. The car was spacious, reliable, and the pricing was very competitive with no hidden fees. Great experience!",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Read first-hand accounts from our happy renters who trust us for their travel adventures and business trips.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt={`Testimonial from ${testimonial.name}`}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p className="text-sm">{testimonial.description}</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;