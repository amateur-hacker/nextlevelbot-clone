"use client";
import React from "react";
import Image from "next/image";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useEffect } from "react";
const Header = () => {
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
    <div className="flex justify-center items-center">
      <div className="grid xl:grid-cols-[700px,minmax(700px,900px)] grid-cols-1 place-content-center place-items-center header-content-wrapper">
        <div className="bg-gray-600 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100/30 p-8 relative max-w-[700px] -top-10 sm:-top-40 xl:left-52 xl:-top-24 z-20 xl:z-10 text-white shadow-black/50 shadow-2xl space-y-4 mx-4">
          <h1 className="h1-fs text-xl sm:text-2xl md:text-3xl xl:text-5xl">
            Boost Your Trading Success with Nextlevelbot&apos;s Powerful
            Automation Tools!
          </h1>
          <button className="px-5 py-3 bg-[#7367f0] text-white rounded-lg wobble transition-transform duration-300 ease-in-out transform hover:scale-110">
            Register Now
          </button>
        </div>
        <div className="z-10 xl:z-20 -order-1 xl:order-none">
          <DotLottiePlayer src="/trader.lottie" autoplay loop></DotLottiePlayer>
        </div>
      </div>
    </div>
  );
};

export default Header;