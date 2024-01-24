"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { wobbleTextAnimation } from "@/src/utils/wobble";
import "remixicon/fonts/remixicon.css";
// import useThrottle from "@/utils/useThrottle";
import { useScrollLevel } from "react-scroll-level";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const { scrollHeight, scrollWidth } = useScrollLevel();
  const position = Math.round(scrollHeight);

  // const [position, setPosition] = useState(0);
  // const [calls, setCalls] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 1075);
    };

    setIsSmallDevice(window.innerWidth <= 1075);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    wobbleTextAnimation();
  });

  // function handleScroll() {
  //   setCalls((c) => c + 1);

  //   setPosition(
  //     Math.round(
  //       ((document.documentElement.scrollTop + document.body.scrollTop) /
  //         (document.documentElement.scrollHeight -
  //           document.documentElement.clientHeight)) *
  //         100
  //     )
  //   );
  // }

  // window.addEventListener("scroll", useThrottle(handleScroll, 100));

  // const possible = ["bg-[#0b2238]", "bg-black"]
  return (
    <nav
      className={`min-h-24 flex justify-center items-center fixed inset-x-0 z-50 bg-white backdrop-blur-2xl transition-[background-color] duration-500 linear ${
        position === 0
          ? "2lg:bg-[#0b2238]"
          : "2lg:bg-white/80  border-b border-b-black/10"
      }`}
    >
      <div className="flex justify-between w-full 2lg:w-max 2lg:justify-center items-center 2lg:gap-16 relative 2lg:static px-8 2lg:px-0">
        <Image
          src={`https://nextlevelbot.com/images/logo/${
            isSmallDevice || position > 0
              ? "nextlogofull.png"
              : "nextlogofull_white.png"
          }`}
          alt="nextlevelbot logo"
          width={200}
          height={200}
          priority
        />

        <div
          className={`flex flex-col pb-8 gap-y-10 2lg:pb-0 2lg:items-center 2lg:justify-center 2lg:gap-16 absolute left-0 top-[4.4rem] w-full 2lg:static px-8 2lg:px-0 bg-white 2lg:bg-transparent
           ${
             isSmallDevice
               ? isOpen
                 ? "menu-slide-down"
                 : "hidden"
               : "2lg:flex 2lg:flex-row"
           }`}
        >
          {/* <h1 className="text-white text-4xl">{position}</h1> */}
          {/* <h1 className="text-white text-4xl">Calls: {calls}</h1> */}
          <ul
            className={`flex flex-col items-center justify-center gap-8 2lg:flex-row`}
          >
            <li
              className={`text-black hover:text-red-500 cursor-pointer ${
                position === 0 ? "2lg:text-white" : "2lg:text-black"
              } 2lg:hover:text-[#7367f0] transition-all duration-300 ease-in w-full 2lg:w-max `}
            >
              Pricing
            </li>
            <li className="relative group w-full 2lg:w-max">
              <span
                className={`text-black ${
                  position === 0 ? "2lg:text-white" : "2lg:text-black"
                } hover:text-purple-500
              cursor-pointer 2lg:hover:text-[#7367f0] transition-all duration-300 ease-in block`}
                onClick={() => setToggleSubmenu(!toggleSubmenu)}
              >
                Indicator Store
              </span>
              <ul
                className={`2lg:absolute -left-1 mt-2 bg-white space-y-2 2lg:w-[200px] py-4 2lg:opacity-0 2lg:invisible 2lg:group-hover:opacity-100 2lg:group-hover:visible transition-all duration-300 2lg:rounded-xl ${
                  isSmallDevice
                    ? toggleSubmenu
                      ? "menu-slide-down"
                      : "hidden"
                    : "block"
                }`}
              >
                <li className="py-2 px-4 hover:text-red-500 2lg:hover:text-black 2lg:p-2 2lg:hover:bg-black/20 cursor-pointer transition-all duration-300 ease-in">
                  Indicator Store
                </li>
                <li className="py-2 px-4 hover:text-red-500 2lg:hover:text-black 2lg:p-2 2lg:hover:bg-black/20 cursor-pointer transition-all duration-300 ease-in">
                  NLB Indicator
                </li>
              </ul>
            </li>
            <li
              className={`text-black hover:text-red-500 cursor-pointer ${
                position === 0 ? "2lg:text-white" : "2lg:text-black"
              } 2lg:hover:text-[#7367f0] transition-all duration-300 ease-in w-full 2lg:w-max `}
            >
              Syntax
            </li>
            <li
              className={`text-black hover:text-red-500 cursor-pointer ${
                position === 0 ? "2lg:text-white" : "2lg:text-black"
              } 2lg:hover:text-[#7367f0] transition-all duration-300 ease-in w-full 2lg:w-max `}
            >
              Symbol
            </li>
            <li
              className={`text-black hover:text-red-500 cursor-pointer ${
                position === 0 ? "2lg:text-white" : "2lg:text-black"
              } 2lg:hover:text-[#7367f0] transition-all duration-300 ease-in w-full 2lg:w-max `}
            >
              Videos
            </li>
            <li
              className={`text-black hover:text-red-500 cursor-pointer ${
                position === 0 ? "2lg:text-white" : "2lg:text-black"
              } 2lg:hover:text-[#7367f0] transition-all duration-300 ease-in w-full 2lg:w-max `}
            >
              Contact Us
            </li>
            <li
              className={`text-black hover:text-red-500 cursor-pointer ${
                position === 0 ? "2lg:text-white" : "2lg:text-black"
              } 2lg:hover:text-[#7367f0] transition-all duration-300 ease-in w-full 2lg:w-max `}
            >
              FAQ
            </li>
          </ul>
          <button className="px-5 py-3 bg-[#7367f0] text-white rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 wobble self-start">
            Log In
          </button>
        </div>

        <button className="block 2lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <i
            className={`${!isOpen ? "ri-menu-line" : "ri-close-line"} ri-2x ${
              isSmallDevice && "text-black"
            }`}
          ></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
