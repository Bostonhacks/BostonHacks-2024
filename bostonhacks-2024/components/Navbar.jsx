"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/bhacks-logo.svg";
import BurgerIcon from "@/public/images/menu-closed.svg";
import OpenIcon from "@/public/images/menu-open.svg";
import Link from "next/link";

const Navbar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="relative p-5 top-0 z-50 w-full ">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Bostonhacks Logo" height={68} width={78} />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row justify-around w-[50vw] items-center">
          <li>
            <Link
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#tracks"
            >
              TRACKS
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#faq"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#schedule"
            >
              SCHEDULE
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-3xl font-ppSupplyMono cursor-pointer px-5 py-5 h-[50px] bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#sponsors"
            >
              SPONSORS
            </Link>
          </li>
        </ul>
        {/* Burger Icon for Mobile */}
        <div className="md:hidden">
          <Image
            className="cursor-pointer w-full h-full"
            src={openBurger ? OpenIcon : BurgerIcon}
            alt="burger"
            onClick={() => setOpenBurger(!openBurger)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {openBurger && (
        <ul animation className="md:hidden flex flex-col items-center bg-black bg-opacity-90 w-[200px] h-auto absolute top-20 right-0 p-5 space-y-5 z-[1000] transition-all duration-500 ease-out ">
          <li className="w-full flex justify-center items-center py-2">
            <Link
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#tracks"
              onClick={() => setOpenBurger(false)}
            >
              TRACKS
            </Link>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <Link
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#faq"
              onClick={() => setOpenBurger(false)}
            >
              FAQ
            </Link>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <Link
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#schedule"
              onClick={() => setOpenBurger(false)}
            >
              SCHEDULE
            </Link>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <Link
              className="text-white text-2xl font-ppSupplyMono cursor-pointer hover:text-gray-400"
              href="#sponsors"
              onClick={() => setOpenBurger(false)}
            >
              SPONSORS
            </Link>
          </li>
        </ul>
        
      )}
    </div>
  );
};

export default Navbar;
