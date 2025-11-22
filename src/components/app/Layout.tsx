import "remixicon/fonts/remixicon.css";
import { useState } from "react";

import { Link } from "react-router-dom";
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navbar = [
    { name: "Home", links: "/" },
    { name: "About", links: "/about" },
    { name: "Project", links: "/project" },
    { name: "Resume", links: "/resume" },
  ];

  return (
    <>
      <header className="w-full">
        <div className="bg-[#446FB6] text-white w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
            {/* Mobile Menu Toggle */}
            {isSidebarOpen ? (
              <i
                className="ri-close-fill h-6 w-6 text-white cursor-pointer lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              ></i>
            ) : (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden"
              >
                <i className="ri-menu-line h-6 w-6 text-white "></i>
              </button>
            )}

            {/* Logo */}
            <div className="flex items-center gap-2 ml-30 ">
              <img src="./image/header.svg" alt="" className="w-50" />
            </div>
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center gap-4 mr-30">
              <div className="flex items-center bg-white overflow-hidden border border-gray-200">
                <div className="px-2 text-gray-500">
                  <i className="ri-search-line text-lg"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 px-2 w-56 outline-none text-black"
                />
              </div>
              <div className="">
                <button className="bg-white  px-4 py-2 text-[#090909] font-semibold border-l border-gray-300 hover:bg-gray-100">
                  Search
                </button>
              </div>
              <div>
                <span className="text-sm text-white">{"+1-303-893-0552"}</span>
              </div>
            </div>
          </div>
        </div>
        <nav className="bg-[#F4F7FA] w-full border-b">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Menu Links */}
            <ul className="flex items-center gap-8 text-gray-800 font-medium text-sm">
              {["Home", "FAQs", "About us", "Contact us", "My account"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative cursor-pointer hover:text-[#446FB6]"
                  >
                    {item}

                    {/* Active underline only for Home */}
                    {item === "Home" && (
                      <span className="absolute left-0 -bottom-1 h-[3px] w-8 bg-gray-700 rounded-sm"></span>
                    )}
                  </li>
                )
              )}
            </ul>

            {/* Icons */}
            <div className="hidden md:flex gap-6">
              <i className="ri-heart-line text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"></i>
              <i className="ri-shopping-cart-line text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2A3036] shadow-lg z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600 "></div>

        <nav className="my-15 space-y-4 mx-5 ">
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.links}
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-2 text-white hover:text-[#f55e2f] transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="block text-center bg-[#f55e2f] text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Layout;
