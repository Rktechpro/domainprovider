import { Link } from "react-router-dom";
import Dvider from "./shaerd/Divider";

const DomainPage = () => {
  const card = [
    {
      domainName: "CorporateJanitorial.com",
      price: "1234",
      link: "/CorporateJanitorial",
    },
    {
      domainName: "YourIsing.com",
      price: "324",
      link: "YourIsing.com",
    },
    {
      domainName: "NeomHub.com",
      price: "13,995",
      link: "NeomHub.com",
    },
    {
      domainName: "TopUtlocker.com",
      price: "3455",
      link: "TopUtlocker.com",
    },
    {
      domainName: "KoalaHomes.com",
      price: "3455",
      link: "KoalaHomes.com",
    },
    {
      domainName: "ChillForce.com",
      price: "3455",
      link: "ChillForce.com",
    },
  ];
  return (
    <>
      <div className=" bg-white py-12 px-6 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-2xl sm:text-2xl font-semibold text-gray-800 mb-10">
            The right domain says it all
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {card.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-sm px-6 py-6 shadow-sm"
            >
              <Link
                to={item.link}
                className="text-lg sm:text-xl text-blue-600 hover:underline font-medium"
              >
                {item.domainName}
              </Link>
              <div className="flex items-center gap-4">
                <div className="text-slate-800 font-medium">${item.price}</div>
                <button
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-blue-700 text-white font-medium  cursor-pointer"
                  type="button"
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-100 w-full py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
                The leader in domain names
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-5">
                HugeDomains is committed to providing the best domain names,
                helping you to easily find one that fits your needs. We promise
                to provide you with a great shopping experience.
              </p>
              <button className="px-6 py-3 bg-slate-800 text-white rounded-full shadow-md hover:bg-slate-900 transition">
                Learn about HugeDomains
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="/image/theleader.png"
                alt="illustration"
                className="max-w-sm w-full"
              />
            </div>
          </div>
          <Dvider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="/image/choosing.png"
                alt="illustration 2"
                className="max-w-sm w-full"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
                How to choose the right domain
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Whether you're launching a new website, rebranding, or securing
                your online legacy – choosing the right domain is one of the
                most fundamental moves you can make.
              </p>
              <button className="px-6 py-3 bg-slate-800 text-white rounded-full shadow-md hover:bg-slate-900 transition">
                Visit our buying guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainPage;
