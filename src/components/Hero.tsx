const Hero = () => {
  return (
    <section className="bg-[#F4F7FA] w-full py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-10">
          Find the domain that's right for you:
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <input
            type="text"
            placeholder=""
            className="w-full md:w-[70%] px-4 py-4  border border-gray-300 text-gray-800  focus:outline-none"
          />

          <button className="bg-[#2DA53A] text-white font-semibold text-lg px-8 py-4  hover:bg-green-700 transition">
            Search
          </button>
        </div>
        <div className="mt-4">
          <button className="text-blue-600 hover:underline text-lg font-semibold">
            Advanced Search
          </button>
        </div>
        <div className="mt-16">
          <i className="ri-arrow-down-s-line text-3xl text-gray-600 animate-bounce"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
