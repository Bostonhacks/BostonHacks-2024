"use client";

import React, { useState } from "react";
import Link from "next/link";
//import Logo from '../public/images/bhacks-logo.svg';
import Logo from '/public/images/bhacks-logo.svg';

import BurgerIcon from "../public/images/open-burger.svg";
import CloseIcon from "../public/images/close-burger.svg"; // Add an icon for closing the menu

const Navbar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="p-5 sticky top-0 z-[100000] w-full">
      <div className="flex flex-row items-center justify-between">
        <a href="/">
          <img src={Logo} alt="Bostonhacks Logo" height={34} width={39} />
        </a>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row justify-around w-[45vw]">
          <li>
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer px-10 py-15 bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#tracks"
            >
              TRACKS
            </a>
          </li>
          <li>
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer px-10 py-15 bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#faq"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer px-10 py-15 bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#schedule"
            >
              SCHEDULE
            </a>
          </li>
          <li>
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer px-10 py-15 bg-black border border-white hover:bg-white hover:text-black transition-all duration-300"
              href="#sponsors"
            >
              SPONSORS
            </a>
          </li>
        </ul>
        {/* Burger Icon for Mobile */}
        <img
          className="cursor-pointer sm:hidden"
          src={openBurger ? CloseIcon : BurgerIcon}
          alt="burger"
          onClick={() => setOpenBurger(!openBurger)}
        />
      </div>

      {/* Mobile Menu */}
      {openBurger && (
        <ul className="sm:hidden flex flex-col items-center bg-black w-full absolute top-full left-0 p-5">
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer hover:text-gray-400"
              href="#tracks"
              onClick={() => setOpenBurger(false)}
            >
              TRACKS
            </a>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer hover:text-gray-400"
              href="#faq"
              onClick={() => setOpenBurger(false)}
            >
              FAQ
            </a>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer hover:text-gray-400"
              href="#schedule"
              onClick={() => setOpenBurger(false)}
            >
              SCHEDULE
            </a>
          </li>
          <li className="w-full flex justify-center items-center py-2">
            <a
              className="text-white text-2xl font-pp-reg cursor-pointer hover:text-gray-400"
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



// "use client";
// import { useState } from 'react';
// import Logo from '../public/images/bhacks-logo.svg';
// import OpenBurger from '../public/images/open-burger.svg';
// import ClosedBurger from '../public/images/close-burger.svg';
// const Navbar = () => {
//   const [openBurger, setOpenBurger] = useState(false);

//   return (
//     <div className="p-5 sticky top-0 z-[100000] w-full ">
//       <div className="flex flex-row align-center  justify-between ">
//         <a href="/">
//           <img src={Logo} alt="Bostonhacks Logo" height={34} width={39} />
//         </a>
//         <ul className="invisible sm:visible flex flex-row justify-around w-[45vw]">
//           <li>
//             <a
//               className="text-white font-pp-reg cursor-pointer bg-black border border-white hover:bg-white hover:text-black"
//               href="#tracks"
//             >
//               TRACKS
//             </a>
//           </li>
//           <li>
//             <a
//               className="text-white font-pp-reg cursor-pointer bg-black border border-white hover:bg-white hover:text-black"
//               href="#faq"
//             >
//               FAQ
//             </a>
//           </li>
//           <li>
//             <a
//               className="text-white font-pp-reg cursor-pointer bg-black border border-white hover:bg-white hover:text-black"
//               href="#schedule"
//             >
//               SCHEDULE
//             </a>
//           </li>
//           <li>
//             <a
//               className="text-white font-pp-reg cursor-pointer bg-black border border-white hover:bg-white hover:text-black"
//               href="#sponsors"
//             >
//               SPONSORS
//             </a>
//           </li>
//         </ul>
//         <img
//           className="cursor-pointer sm:hidden"
//           src={openBurger ? OpenBurger : ClosedBurger}
//           alt="burger"
//           onClick={() => {
//             setOpenBurger(!openBurger);
//           }}
//         />
//       </div>

//       {openBurger && (
//         <ul
//           className="sm:hidden rounded-md bg-[#DCC7AF] w-[25vw] p-2 absolute right-2"
//           onClick={() => {
//             setOpenBurger(false);
//           }}
//         >
//           <li className="w-full flex justify-center items-center">
//             <a
//               className="text-[#5A4123] text-lg font-pp-reg cursor-pointer hover:text-gray-400"
//               href="#tracks"
//             >
//               TRACKS
//             </a>
//           </li>
//           <li className="w-full flex justify-center items-center">
//             <a
//               className="text-[#5A4123] text-lg font-pp-reg cursor-pointer hover:text-gray-400 "
//               href="#faq"
//             >
//               FAQ
//             </a>
//           </li>
//           <li className="w-full flex justify-center items-center">
//             <a
//               className="text-[#5A4123] text-lg font-pp-reg cursor-pointer hover:text-gray-400"
//               href="#schedule"
//             >
//               SCHEDULE
//             </a>
//           </li>
//           <li className="w-full flex justify-center items-center">
//             <a
//               className="text-[#5A4123] text-lg font-pp-reg cursor-pointer hover:text-gray-400"
//               href="#sponsors"
//             >
//               SPONSORS
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };
// export default Navbar;
