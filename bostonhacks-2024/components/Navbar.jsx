"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/bhacks-logo.svg";
import BurgerIcon from "@/public/images/open-burger.svg";
import CloseIcon from "@/public/images/close-burger.svg";

const Navbar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="p-5 top-0 z-[100000] w-full ">
      <div className="flex flex-row items-center justify-between">
        <a href="/">
          <Image src={Logo} alt="Bostonhacks Logo" height={68} width={78} />
        </a>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row justify-around w-[50vw] items-center">
          <li>
            <a
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#tracks"
            >
              TRACKS
            </a>
          </li>
          <li>
            <a
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#faq"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#schedule"
            >
              SCHEDULE
            </a>
          </li>
          <li>
            <a
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#sponsors"
            >
              SPONSORS
            </a>
          </li>
        </ul>
        {/* Burger Icon for Mobile */}
        <div className="sm:hidden">
          <Image
            className="cursor-pointer"
            src={openBurger ? CloseIcon : BurgerIcon}
            alt="burger"
            onClick={() => setOpenBurger(!openBurger)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {openBurger && (
        <ul className="sm:hidden flex flex-col items-center bg-black bg-opacity-90 w-[200px] h-auto absolute top-20 right-0 p-5 space-y-5 z-[1000] transition-all duration-500">
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#tracks"
              onClick={() => setOpenBurger(false)}
            >
              TRACKS
            </a>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#faq"
              onClick={() => setOpenBurger(false)}
            >
              FAQ
            </a>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#schedule"
              onClick={() => setOpenBurger(false)}
            >
              SCHEDULE
            </a>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#sponsors"
              onClick={() => setOpenBurger(false)}
            >
              SPONSORS
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
