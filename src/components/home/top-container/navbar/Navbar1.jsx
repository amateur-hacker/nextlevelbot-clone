"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "@/css/navbar.css";
// import { Merriweather } from "next/font/google";
// const dancingScript = Merriweather({ subsets: ['latin'], weight: ['400'] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const allWobbleLetters = document.querySelectorAll(".wobble");

    allWobbleLetters.forEach((el) => {
      let text = el.textContent;
      const textNodes = [];

      for (let i = 0; i < text.length; i++) {
        let delay = (i + 1) * 50;
        let character = text[i] === " " ? "&nbsp;" : text[i];
        textNodes.push(
          `<span style="animation-delay: ${delay}ms">${character}</span>`
        );
      }

      el.innerHTML = textNodes.join("");
    });
  }, []);

  return (
    <div className="min-h-24 flex justify-center items-center">
      <nav className="py-4 xl:py-0 flex w-full xl:w-max items-start xl:flex-row justify-around xl:justify-center xl:items-center gap-16 relative">
        <div className="space-y-10 xl:space-y-0 flex flex-col xl:flex-row xl:items-center xl:justify-center xl:gap-16 flex-1">
          <Image
            src="https://nextlevelbot.com/images/logo/nextlogofull_white.png"
            alt="nextlevelbot logo"
            width={200}
            height={200}
            priority
          />
          <div
            className={`flex flex-col xl:flex-row justify-center items-start xl:items-center z-100 gap-16 ${
              isOpen && "hidden"
            }`}
          >
            <ul className="nav-ul xl:gap-8 flex flex-col xl:flex-row relative w-full">
              <li>Pricing</li>
              <div className="relative group">
                <li className="cursor-pointer">Indicator Store</li>
                <ul className="absolute mt-2 left-0 bg-white space-y-2 w-[200px] py-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform -translate-y-5 group-hover:translate-y-0 transition-all duration-300 z-40 submenu">
                  <li className="p-2 hover:bg-black/20 cursor-pointer">
                    Indicator Store
                  </li>
                  <li className="p-2 hover:bg-black/20 cursor-pointer">
                    NLB Indicator
                  </li>
                </ul>
              </div>
              <li>Syntax</li>
              <li>Symbol</li>
              <li>Videos</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>

            <button className="px-5 py-3 bg-[#7367f0] text-white rounded-lg wobble transition-transform duration-300 ease-in-out transform hover:scale-110">
              Log In
            </button>
          </div>
        </div>
        <div className="absolute right-0 block xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current text-white h-6 w-6 ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 text-white ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between flex-wrap p-6">
//       <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
//            <Image
//              src="https://nextlevelbot.com/images/logo/nextlogofull_white.png"
//              alt="nextlevelbot logo"
//              width={200}
//              height={200}
//              priority
//            />
//       </div>
//       <div className="block lg:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
//         >
//           <svg
//             className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//           <svg
//             className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//           </svg>
//         </button>
//       </div>
//       <div
//         className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <div className="text-sm lg:flex-grow">
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//           >
//             First Link
//           </a>
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//           >
//             Second Link
//           </a>
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//           >
//             Third Link
//           </a>
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//           >
//             Fourth Link
//           </a>
//         </div>
//         <div>
//           <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
//             Click Me
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default App;
