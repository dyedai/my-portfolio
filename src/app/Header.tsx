"use client";

import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative top-0 left-0 w-full z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-5xl font-semibold whitespace-nowrap text-white">DAI.DAI.FORIO</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 transition duration-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8">
            <li>
              <Link href="/" className="c-txt line flex py-2 px-3 text-white transition duration-200">
                <span className="text-2xl font-semibold whitespace-nowrap text-white">HOME</span>
              </Link>
            </li>
            {["WORKS", "PROFILE", "CONTACT"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="c-txt line flex py-2 px-3 text-white transition duration-200">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
