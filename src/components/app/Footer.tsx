import { Link } from "react-router-dom";
import Dvider from "../shaerd/Divider";

const Footer = () => {
  const navLink = [
    { lable: "Home", link: "#" },
    { lable: "Categories", link: "#" },
    { lable: "Payment plans", link: "#" },
    { lable: "My account", link: "#" },
  ];
  const secure = [
    { label: "Money back guarantee", href: "#" },
    { label: "Escrow.com", href: "#" },
    { label: "NameBright.com", href: "#" },
    { label: "Testimonials", href: "#" },
  ];
  const HelpFull = [
    { label: "Buying guide", href: "#" },
    { label: "Case studies", href: "#" },
    { label: "FAQs", href: "#" },
  ];
  const AboutUs = [
    { label: "Overview", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Terms and conditions", href: "#" },
    { label: "Privacy policy", href: "#" },
  ];
  return (
    <footer className="bg-[#4E73B7] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 text-sm">
          <div>
            <h3 className="font-bold text-base mb-4">Shop</h3>
            <ul className="space-y-3 flex flex-col">
              {navLink.map((item, index) => (
                <Link className="hover:underline" to={item.link} key={index}>
                  {item.lable}
                </Link>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Safe and secure</h3>
            <ul className="space-y-3">
              {secure.map((item, index) => (
                <div key={index}>
                  <Link to={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </div>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Helpful Tips</h3>
            <ul className="space-y-3">
              {HelpFull.map((item, index) => (
                <div key={index}>
                  <Link to={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </div>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">About us</h3>
            <ul className="space-y-3">
              {AboutUs.map((item, index) => (
                <div key={index}>
                  <Link to={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <Dvider />

        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <span className="text-3xl font-bold">.com</span>
            <a href="#" className="text-lg font-medium hover:underline">
              NameBright.com
            </a>

            <div className="flex gap-4">
              <img
                src="https://static.hugedomains.com/images/hdv3-img/footer-logo-3.png"
                alt="Visa"
                className="h-8"
              />
            </div>

            <img
              src="https://static.hugedomains.com/images/hdv3-img/footer-logo-4.png"
              alt="PayPal"
              className="h-9"
            />
            <img
              src="https://static.hugedomains.com/images/hdv3-img/footer-logo-5.png"
              alt="Escrow.com"
              className="h-10"
            />
          </div>

          <div className="flex items-center gap-3 text-lg font-medium">
            <span>Talk to a domain expert:</span>
            <Link
              to="tel:13038930552"
              className="font-bold text-xl underline hover:no-underline"
            >
              1-303-893-0552
            </Link>
          </div>

          <p className="text-sm opacity-80">
            © 2025 HugeDomains.com. All rights reserved.
          </p>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="p-3 bg-gray-900 rounded-full shadow-2xl hover:bg-gray-800 transition-all hover:scale-110">
          <img
            className="w-10 h-8"
            src="https://static.hugedomains.com/images/hdv3-img/mail-icon.png"
            alt=""
          />
        </button>
      </div>

      <div className="fixed bottom-6 left-6 z-50">
        <button className="p-3 bg-blue-700 rounded-full shadow-2xl hover:bg-blue-800 transition-all hover:scale-110">
          <img
            className="w-8 h-8"
            src="https://cdn-cookieyes.com/assets/images/revisit.svg"
            alt="revisit"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
