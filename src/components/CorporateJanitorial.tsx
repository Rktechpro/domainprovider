import { Link } from "react-router-dom";
import Dvider from "./shaerd/Divider";
import { useState } from "react";

interface QuickStat {
  label: string;
  value: string;
  highlight?: boolean;
}

const quickStats: QuickStat[] = [
  { label: "Domain length", value: "8 characters" },
  { label: "Keywords", value: "XI, Dental", highlight: true },
  { label: "Base domain", value: "XIDental" },
  { label: "TLD extension", value: ".com", highlight: true },
];

const CorporateJanitorial = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const testimonials = [
    {
      avatar: "D",
      message: "Fast, easy, and painless.",
      author: "Dann Berg",
      date: "November 18, 2025",
      color: "bg-[#9085FF]",
    },
    {
      avatar: "G",
      message:
        "Acquiring OakvilleMaids.com through HugeDomains was a good experience...",
      author: "Greg Shepard",
      date: "November 17, 2025",
      color: "bg-[#0047AF]",
    },
    {
      avatar: "D",
      message: "Very smooth transaction, payment setup was a life saver.",
      author: "Danny Bernard",
      date: "November 17, 2025",
      color: "bg-[#830000]",
    },
    {
      avatar: "M",
      message: "The transition was smooth and easy.",
      author: "Martin Thoolen",
      date: "November 10, 2025",
      color: "bg-[#89969F]",
    },
    {
      avatar: "J",
      message: "Super smooth, got access in minutes.",
      author: "John Ziegler",
      date: "November 7, 2025",
      color: "bg-[#2AA527]",
    },
  ];

  const features = [
    {
      title: "30-day money back guarantee",
      description:
        "HugeDomains provides a 100% satisfaction guarantee for every domain...",
    },
    {
      title: "Quick delivery of the domain",
      description:
        "Access to the domain is available within one to two hours of purchase...",
    },
    {
      title: "Safe and secure shopping",
      description:
        "We protect your information through SSL encryption and secure checkout.",
    },
  ];

  const faqs = [
    {
      question: "How do I transfer to another registrar such as GoDaddy?",
      answer:
        "After purchase, you'll receive full ownership and an Auth/EPP code...",
    },
    {
      question: "How do I get the domain after the purchase?",
      answer:
        "Immediately after payment, the domain is placed in your HugeDomains account...",
    },
    {
      question: "What comes with the domain name?",
      answer:
        "You get full ownership, free parking page, free DNS, forwarding...",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer 0% interest payment plans from 6 to 60 months...",
    },
    {
      question: "How do I keep my personal information private?",
      answer:
        "We include free WHOIS privacy protection on every eligible domain.",
    },
  ];

  const card = [
    {
      domainName: "CorporateJanitorial.com",
      price: "1234",
      link: "/CorporateJanitorial",
    },
    { domainName: "YourIsing.com", price: "324", link: "YourIsing.com" },
    { domainName: "NeomHub.com", price: "13,995", link: "NeomHub.com" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-4 sm:p-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-4 sm:p-6">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            CorporateJanitorial.com
          </h1>

          <p className="text-xl font-semibold">
            This domain is for sale:{" "}
            <span className="text-green-600">$5,295</span>
          </p>

          <div className="flex gap-3 my-3">
            <i className="ri-heart-line text-2xl text-gray-300"></i>
            <p className="py-1">Favorite</p>
          </div>

          <Dvider />
          <p>Questions? Talk to a domain expert: 1-303-893-0552</p>
          <Dvider />

          {/* TESTIMONIALS */}
          <div className="mt-6 space-y-6">
            {testimonials.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 ${item.color}`}
                >
                  {item.avatar}
                </div>

                <div className="flex-1 border border-gray-200 p-5">
                  <p className="text-gray-800 italic mb-3">“{item.message}”</p>
                  <p className="text-sm text-gray-500">
                    - {item.author}, {item.date}
                  </p>
                </div>
              </div>
            ))}

            <Link to="#" className="text-blue-500 text-lg hover:underline">
              See more testimonials
            </Link>
          </div>

          {/* FEATURES */}
          <div className="py-6">
            <h1 className="text-3xl text-violet-800 font-semibold my-6">
              Our promise to you
            </h1>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div key={index} className="border border-gray-200 p-4">
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#4E73B7]">FAQs</h2>
              <Link to="#" className="text-[#4E73B7] hover:text-blue-800">
                See more FAQs
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-[#7199E2] text-white font-medium text-lg"
                  >
                    <span className="flex items-center gap-4">
                      {openIndex === index ? (
                        <i className="ri-subtract-fill text-2xl"></i>
                      ) : (
                        <i className="ri-add-line text-2xl"></i>
                      )}
                      {faq.question}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-2 bg-white">
                      <p className="text-gray-700 leading-relaxed pl-11">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* OTHER DOMAINS */}
          <div className="space-y-4 mb-8">
            <p className="text-2xl text-[#4E73B7] font-semibold">
              Other domains you might like
            </p>

            <div className="space-y-6">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#F3F6F8] border border-slate-200 px-6 py-6 gap-4"
                >
                  <Link
                    to={item.link}
                    className="text-xl text-blue-600 font-medium hover:underline"
                  >
                    {item.domainName}
                  </Link>

                  <div className="flex items-center gap-4">
                    <p className="text-slate-800 font-medium">${item.price}</p>

                    <button
                      type="button"
                      className="px-4 py-2 bg-green-600 hover:bg-blue-700 text-white font-medium"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="py-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Quick stats
            </h2>

            <div className="bg-[#F3F6F8] border border-gray-300 p-8 space-y-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="text-gray-700 text-lg font-medium">
                    {stat.label}
                  </p>

                  <p
                    className={`text-lg font-medium ${
                      stat.highlight ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-10 p-4 lg:sticky lg:top-10 h-fit">
          {/* CARD */}
          <div className="w-full bg-[#F3F6F8] border border-gray-400 p-4 rounded-md">
            <h1 className="text-[#2AA53A] text-2xl font-semibold">
              CorporateJanitorial.com
            </h1>

            <div className="flex justify-between mt-2 mb-3">
              <span className="text-sm font-semibold">Buy Now</span>
              <strong>$5,295</strong>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
              Buy Now
            </button>

            <p className="font-semibold text-center my-3">or</p>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
              Start Payment Plan
            </button>

            <p className="text-sm text-gray-600 mt-4">
              Only $220.63/mo for 24 months
            </p>

            <Link to="" className="text-blue-600 hover:underline text-sm">
              See details
            </Link>
          </div>

          {/* ICON LIST */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="https://static.hugedomains.com/images/hdv3-img/30daysmallico.png"
                alt="icon"
                className="w-10"
              />
              <p>30-day money back guarantee</p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src="https://static.hugedomains.com/images/hdv3-img/roket-side-ico.png"
                alt="icon"
                className="w-10"
              />
              <p>Take immediate ownership</p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src="https://static.hugedomains.com/images/hdv3-img/safesmallico.png"
                alt="icon"
                className="w-10"
              />
              <p>Safe and secure shopping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateJanitorial;
