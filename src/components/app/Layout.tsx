import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dvider from "../shaerd/Divider";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "FAQs", href: "/faqs" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "My account", href: "/account" },
  ];
  const MobileLink = [
    { label: "Home", href: "/" },
    { label: "FAQs", href: "/faqs" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "My account", href: "/account" },
    { label: "My favorites", href: "/favorites" },
    { label: "Shopping cart", href: "/cart" },
  ];

  return (
    <>
      <header className="w-full bg-[#446FB6] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          <button onClick={() => setOpen(true)} className="lg:hidden text-3xl">
            <i className="ri-menu-line"></i>
          </button>
          <img src="/image/header.svg" alt="logo" className="w-28 md:w-36" />
          <div className="md:hidden mr-10 space-x-10">
            <i className="ri-search-line text-2xl"></i>
            <i className="ri-phone-line text-2xl"></i>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-white border border-gray-300  overflow-hidden">
              <span className="px-3 text-gray-600">
                <i className="ri-search-line text-lg"></i>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-2 w-40 md:w-56 outline-none text-black"
              />
            </div>

            <button className="bg-white px-4 py-2  border border-gray-300 hover:bg-gray-100 text-black font-medium">
              Search
            </button>
            <span className="text-sm font-medium">+1-303-893-0552</span>
          </div>
        </div>
      </header>
      <nav className="bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <ul className="hidden lg:flex items-center gap-6 text-gray-800 font-medium text-sm">
            {navLinks.map((item) => (
              <li key={item.label} className="group relative">
                <Link to={item.href} className="hover:text-[#446FB6] relative">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#446FB6] rounded transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex gap-6">
            <i className="ri-heart-line text-2xl text-gray-600 hover:text-[#446FB6] cursor-pointer"></i>
            <i className="ri-shopping-cart-line text-2xl text-gray-600 hover:text-[#446FB6] cursor-pointer"></i>
          </div>
        </div>
        <Dvider />
      </nav>
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="bg-[#446FB6] text-white px-4 py-4 flex justify-between items-center">
          <button onClick={() => setOpen(false)}>
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>
        <div className="px-6 py-6 space-y-6 text-gray-900">
          {MobileLink.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                onClick={() => setOpen(false)}
                className="block text-[15px] font-medium"
              >
                {item.label}
              </Link>
              {item.label === "Home" && (
                <div className="mt-1 w-12 h-0.5 bg-black"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </>
  );
};

export default Layout;
