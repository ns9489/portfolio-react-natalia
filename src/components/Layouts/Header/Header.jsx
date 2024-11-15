import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav className="bg-[#262626] py-2 px-4 flex justify-between items-center w-full fixed top-0 left-0 z-50 text-beige text-lg">
        <h2 className="text-white text-xl font-bold">
          Natalia <span className="text-[rgba(12,238,200,0.8)] shadow-[2px_2px_5px_rgba(12,238,200,0.8)]">Sierra</span>
        </h2>
        
        <ul className="flex space-x-8 list-none p-0 m-0">
          <li>
            <a href="#AboutMe" className="text-white font-semibold hover:underline focus:text-[#6ec4b1]">
              Home
            </a>
          </li>
          <li>
            <a href="#Education" className="text-white font-semibold hover:underline focus:text-[#6ec4b1]">
              Education
            </a>
          </li>
          <li>
            <a href="#Project" className="text-white font-semibold hover:underline focus:text-[#6ec4b1]">
              Project
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-white font-semibold hover:underline focus:text-[#6ec4b1]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


