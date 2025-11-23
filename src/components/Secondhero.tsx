import { useEffect, useState } from "react";

const Secondhero = () => {
  const slides = [
    {
      id: 1,
      img: "https://static.hugedomains.com/images/hdv3-img/homerotate/banner_chili.png",
      title: "Domain names for anything you're into",
      subtitle: "Over 5 million domains available — get yours today!",
      tags: ["Chili", "Spicy", "Hot", "Fork", "Heat"],
    },
    {
      id: 2,
      img: "https://static.hugedomains.com/images/hdv3-img/homerotate/banner_garden.png",
      title: "Find the perfect domain for business",
      subtitle: "Instant availability. Professional support.",
      tags: ["Business", "Brand", "Pro", "Start", "Grow"],
    },
    {
      id: 3,
      img: "https://static.hugedomains.com/images/hdv3-img/homerotate/banner_health.png",
      title: "Premium domains made easy",
      subtitle: "Secure, fast, and reliable service.",
      tags: ["Premium", "Secure", "Fast", "Expert", "Safe"],
    },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <div className="w-full">
      <section className="bg-white py-16">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Since 2005, we've helped thousands of people <br />
          find the perfect domain name.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-6xl font-light text-blue-600">0%</h1>
            <p className="text-lg mt-3 font-medium text-gray-700">
              Pay later with 0% <br /> financing
            </p>
          </div>

          <div>
            <img
              src="/image/mbg.svg"
              className="text-blue-600 text-6xl mx-auto"
            />
            <p className="text-lg mt-3 font-medium text-gray-700">
              30-day money-back <br /> guarantee
            </p>
          </div>

          <div>
            <img
              src="/image/support.svg"
              className="text-blue-600 text-6xl mx-auto"
            />
            <p className="text-lg mt-3 font-medium text-gray-700">
              Friendly and helpful <br /> domain experts
            </p>
          </div>

          <div>
            <img
              src="/image/Security.svg"
              className="text-blue-600 text-6xl mx-auto"
            />
            <p className="text-lg mt-3 font-medium text-gray-700">
              Safe and secure <br /> shopping experience
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#4E73B7] text-white py-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-14">
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <i className="ri-arrow-left-line text-4xl"></i>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <i className="ri-arrow-right-line text-4xl"></i>
          </button>
          <div className="flex justify-center">
            <img
              src={slides[current].img}
              alt="Hero"
              className="w-72 h-72 rounded-full object-cover shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              {slides[current].title}
            </h2>

            <p className="mt-4 text-xl text-gray-200">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {slides[current].tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secondhero;
