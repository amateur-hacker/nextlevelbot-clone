"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {

  const logoutUser = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("https://nextlevelpine.com/nlbweb/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      toast(`${data.message}`);

      // if (!data.message.includes("not found")) {
      window.location.href = "/login";
      // }
    } catch (error) {
      console.log(`Error coming from logoutUser function: ${error.message}`);
    }
  };

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("https://nextlevelpine.com/nlbweb/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: "sachin1234@gmail.com",
          password: "sachin1234@,",
        }),
      });

      const data = await response.json();
      console.log(data);

      toast(`${data.message}`);
    } catch (error) {
      console.log(`Error coming from loginUser function: ${error.message}`);
    }
  };

  return (
    <div className="">
      <nav className="min-h-[80px] h-full flex justify-between items-center border-b-2 px-4">
        <button
          className="bg-gray-900 px-3 py-2 rounded-lg text-white"
          onClick={loginUser}
        >
          Login
        </button>
        <button
          className="bg-gray-900 px-3 py-2 rounded-lg text-white"
          onClick={logoutUser}
        >
          Logout
        </button>
      </nav>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default page;
