import { Link } from "react-router-dom";
import Dvider from "./shaerd/Divider";
const ClientTestimonials = () => {
  const clint = [
    {
      image:
        "https://static.hugedomains.com/images/hdv3-img/new-testi-image-1.png",
      text: "I purchased our domain through HugeDomains.com and the whole process was simple, quick and easy to use. If you're looking for the right domain for your business, I would highly recommend their services!",
      author: "Mike Waller",
      website: "Ccdenver.com",
    },
    {
      image:
        "https://static.hugedomains.com/images/hdv3-img/new-testi-image-2.png",
      text: "Happy to purchase our domain thru HugeD. Easy process and fine instructions.",
      author: "Pelle Plesner",
      website: "FamPower.com",
    },
    {
      image:
        "https://static.hugedomains.com/images/hdv3-img/new-testi-image-3.png",
      text: "As you know, a great domain name is really important but can be expensive. The monthly payment makes it easy to acquire a great domain name. I really enjoy the services from HugeDomains.",
      author: "Franck Bertuzzi",
      website: "Sensometric.com",
    },
  ];

  return (
    <>
      <div className="w-full py-16 px-6 sm:px-10 lg:px-20 bg-white space-y-10">
        <div className="flex items-center justify-center space-x-5">
          <h2 className="text-2xl md:text-2xl font-semibold text-slate-800 space-x-3">
            Client Testimonials
          </h2>
          <Link
            to={"#"}
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            See more
          </Link>
        </div>

        <div className="border border-slate-300  bg-slate-50 p-8 space-y-10">
          {clint.map((item, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt="client"
                  className="w-14 h-14 rounded-full object-cover border"
                />

                <div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    “ {item.text} ”
                  </p>
                  <p className="mt-2 text-slate-800 font-medium">
                    {item.author}{" "}
                    <span className="text-slate-600">| {item.website}</span>
                  </p>
                </div>
              </div>
              {index !== clint.length - 1 && <Dvider />}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center py-4 sm:py-6 gap-4 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <img src="https://static.hugedomains.com/images/hdv3-img/ico_contact.svg" />
                </div>
                <div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 text-blue-600 sm:hidden" />
                    <p className="text-lg sm:text-xl font-semibold text-gray-900">
                      Questions? We can help:{" "}
                      <span className="text-blue-600 font-bold">
                        1-303-893-0552
                      </span>
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    Let's talk about how you can get value from your domain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonials;
