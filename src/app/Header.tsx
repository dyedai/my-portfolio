"use client";

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-5xl font-semibold whitespace-nowrap text-white">DAI.DAI.FORIO</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 transition duration-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8">
            {/* HOME Link with adjustments */}
            <li>
              <Link href="/" className="c-txt line flex py-2 px-3 text-white transition duration-200">
                <span className="text-2xl font-semibold whitespace-nowrap text-white">HOME</span>
              </Link>
            </li>
            {/* Other menu items */}
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
