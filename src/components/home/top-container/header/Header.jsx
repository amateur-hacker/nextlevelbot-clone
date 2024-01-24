"use client";
import React, { useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { wobbleTextAnimation } from "@/src/utils/wobble";
import { Roboto, Cookie } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const cookie = Cookie({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  useEffect(() => {
    wobbleTextAnimation();
  }, []);

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="grid xl:grid-cols-[700px,minmax(700px,900px)] grid-cols-1 place-content-center place-items-center">
        <div className="bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100/30 p-8 relative max-w-[700px] -top-10 sm:-top-40 xl:-top-28 xl:left-52 text-white shadow-black/50 shadow-2xl space-y-4 mx-4  text-center sm:text-start z-[1] xl:z-0">
          <h1
            className={`text-2xl sm:text-4xl xl:text-5xl ${cookie.className} lh-halfof3 z-[2]`}
          >
            Boost your Trading Success with Nextlevelbot&apos;s Powerful
            Automation Tools!
          </h1>
          <button className="px-5 py-3 bg-[#7367f0] text-white rounded-lg wobble transition-transform duration-300 ease-in-out transform hover:scale-110 z-[2] shadow-black/30 shadow-lg">
            Register Now
          </button>
        </div>
        <div className="-order-1 xl:order-none z-0 xl:z-[1]">
          <DotLottiePlayer
            src="/trading-statistics.lottie"
            autoplay
            loop
          ></DotLottiePlayer>
        </div>
      </div>
    </div>
  );
};

export default Header;
