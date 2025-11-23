import { Link } from "react-router-dom";
import Card from "./shaerd/Card";

const SuccessStories = () => {
  const TerminolgyCard = [
    {
      image: "https://static.hugedomains.com/images/hdv3-img/sucses-item-5.jpg",
      label:
        "We had a rough time with our original name, the worst part was the traffic. Since we bought CryptoAdventure our site grew tremendously...",

      link: "#",
      brand:
        "https://static.hugedomains.com/images/hdv3-img/sucses-item-logo-5.png",
    },

    {
      image: "https://static.hugedomains.com/images/hdv3-img/sucses-item-4.jpg",
      label:
        "We found a name that is unique, captures everything related to improvement and promotes a sense of being better.",

      link: "#",
      brand:
        "https://static.hugedomains.com/images/hdv3-img/sucses-item-logo-4.png",
    },
    {
      image: "https://static.hugedomains.com/images/hdv3-img/sucses-item-2.jpg",
      label:
        "I've always loved the saying 'think globally, work locally,' and I think this is one of the keys to growing a business. ",

      link: "#",
      brand:
        "https://static.hugedomains.com/images/hdv3-img/sucses-item-logo-2.png",
    },
  ];
  return (
    <div className="w-full py-16 px-6 sm:px-10 lg:px-20 bg-white space-y-10">
      <div className="flex items-center justify-center space-x-5">
        <h2 className="text-2xl md:text-2xl font-semibold text-slate-800 space-x-3">
          Success stories
        </h2>
        <Link
          to={"#"}
          className="text-blue-600 hover:underline text-lg font-medium"
        >
          See more
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TerminolgyCard.map((item, index) => (
          <div key={index}>
            <Card image={item.image}>
              <div className="px-6 py-6 text-center">
                <p className="text-slate-700 leading-relaxed mb-4">
                  {item.label}
                </p>
                <Link
                  to={item.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read the story.
                </Link>
                <div className="mt-10">
                  <img
                    src={item.brand}
                    className="px-28 text-center text-xl font-semibold text-slate-800"
                  />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
