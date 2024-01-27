"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Akaya_Kanadaka } from "next/font/google";

const akayaKanadaka = Akaya_Kanadaka({ subsets: ["latin"], weight: "400" });

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="space-y-10 max-w-[300px] sm:max-w-max">
        <div className="space-y-2">
          <div className="text-center space-x-3">
            <i className="ri-robot-2-fill ri-2x text-gray-900"></i>
            <span className={`text-2xl ${akayaKanadaka.className}`}>
              Let&apos;s Automate Trading
            </span>
          </div>
          <p className="text-center text-gray-500 w-[280px] mx-auto text-sm">
            Forgot Password <i className="ri-lock-fill ri-xl text-gray-900"></i>
          </p>
        </div>
        <form className="space-y-4 flex flex-col">
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="pb-1 border-b-2 outline-none focus:border-b-black/80 bordr-b-0 transition-all duration-500"
              id="email"
              required
              autoComplete="off"
              spellCheck={false}
              type="email"
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="!mt-8 px-4 py-2 bg-gray-900 text-white rounded-lg w-[80%] mx-auto shadow-black/30 shadow-lg group"
          >
            <span>Send reset link</span>
            <i className="ml-2 ri-arrow-right-up-line ri-xl transition-transform duration-300 ease-in group-hover:translate-x-1 inline-block"></i>
          </button>
        </form>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          newestOnTop={false}
          pauseOnHover={false}
          theme="dark"
        />
        <div className="space-x-2 text-sm text-center">
          <Link href="/login">
            <span className="text-gray-900 underline">Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
